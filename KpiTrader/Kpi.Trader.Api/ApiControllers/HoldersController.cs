using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Kpi.Trader.Api.Context;
using Kpi.Trader.Api.Context.Models;

namespace Kpi.Trader.Api.ApiControllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoldersController : ControllerBase
    {
        private readonly TraderContext _context;

        public HoldersController(TraderContext context)
        {
            _context = context;
        }

        // GET: api/Holders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Holder>>> GetHolders()
        {
            return await _context.Holders.ToListAsync();
        }

        // GET: api/Holders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Holder>> GetHolder(Guid id)
        {
            var holder = await _context.Holders.FindAsync(id);

            if (holder == null)
            {
                return NotFound();
            }

            return holder;
        }

        // PUT: api/Holders/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHolder(Guid id, Holder holder)
        {
            if (id != holder.Id)
            {
                return BadRequest();
            }

            _context.Entry(holder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HolderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Holders
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Holder>> PostHolder(Holder holder)
        {
            _context.Holders.Add(holder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHolder", new { id = holder.Id }, holder);
        }

        // DELETE: api/Holders/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Holder>> DeleteHolder(Guid id)
        {
            var holder = await _context.Holders.FindAsync(id);
            if (holder == null)
            {
                return NotFound();
            }

            _context.Holders.Remove(holder);
            await _context.SaveChangesAsync();

            return holder;
        }

        private bool HolderExists(Guid id)
        {
            return _context.Holders.Any(e => e.Id == id);
        }
    }
}
