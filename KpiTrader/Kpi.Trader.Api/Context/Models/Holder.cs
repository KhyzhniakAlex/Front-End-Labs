using System.Collections.Generic;

namespace Kpi.Trader.Api.Context.Models
{
    public class Holder : BaseEntity
    {
        public string FullName { get; set; }

        public List<Stock> Stocks { get; set; }
    }
}
