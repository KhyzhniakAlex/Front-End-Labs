using Newtonsoft.Json;
using System.Collections.Generic;

namespace Kpi.Trader.Api.Context.Models
{
    public class Holder : BaseEntity
    {
        public string FullName { get; set; }

        [JsonIgnore]
        public List<Stock> Stocks { get; set; }
    }
}
