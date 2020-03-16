using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Kpi.Trader.Api.Context.Models
{
    public class Stock : BaseEntity 
    {
        public double StockPrice { get; set; }
        public Guid HolderId { get; set; }
        public Holder Holder { get; set; }
        public Guid CompanyId { get; set; }
        public Company Company { get; set; }
    }
}
