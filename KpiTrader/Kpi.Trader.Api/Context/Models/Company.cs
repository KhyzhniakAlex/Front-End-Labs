using System.Collections.Generic;

namespace Kpi.Trader.Api.Context.Models
{
    public class Company  :BaseEntity
    {
        public string FullName { get; set; }
        public string Ticker { get; set; }
        public List<Stock> Stocks { get; set; }
    }
}
