using Kpi.Trader.Api.Context.Models;
using Microsoft.EntityFrameworkCore;

namespace Kpi.Trader.Api.Context
{
    public class TraderContext:DbContext
    {
        public TraderContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Company> Companies { get; set; }
        public DbSet<Holder> Holders { get; set; }
        public DbSet<Stock> Stocks { get; set; }
    }
}
