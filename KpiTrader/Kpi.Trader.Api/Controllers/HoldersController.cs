using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Kpi.Trader.Api.Context;
using Kpi.Trader.Api.Context.Models;

namespace Kpi.Trader.Api.Controllers
{
    public class HoldersController : Controller
    {
        private readonly TraderContext _context;

        public HoldersController(TraderContext context)
        {
            _context = context;
        }

        // GET: Holders
        public async Task<IActionResult> Index()
        {
            return View(await _context.Holders.ToListAsync());
        }

        // GET: Holders/Details/5
        public async Task<IActionResult> Details(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var holder = await _context.Holders
                .FirstOrDefaultAsync(m => m.Id == id);
            if (holder == null)
            {
                return NotFound();
            }

            return View(holder);
        }

        // GET: Holders/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Holders/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("FullName,Id,ModifiedOn")] Holder holder)
        {
            if (ModelState.IsValid)
            {
                holder.Id = Guid.NewGuid();
                _context.Add(holder);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(holder);
        }

        // GET: Holders/Edit/5
        public async Task<IActionResult> Edit(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var holder = await _context.Holders.FindAsync(id);
            if (holder == null)
            {
                return NotFound();
            }
            return View(holder);
        }

        // POST: Holders/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, [Bind("FullName,Id,ModifiedOn")] Holder holder)
        {
            if (id != holder.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(holder);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!HolderExists(holder.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(holder);
        }

        // GET: Holders/Delete/5
        public async Task<IActionResult> Delete(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var holder = await _context.Holders
                .FirstOrDefaultAsync(m => m.Id == id);
            if (holder == null)
            {
                return NotFound();
            }

            return View(holder);
        }

        // POST: Holders/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var holder = await _context.Holders.FindAsync(id);
            _context.Holders.Remove(holder);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool HolderExists(Guid id)
        {
            return _context.Holders.Any(e => e.Id == id);
        }
    }
}
