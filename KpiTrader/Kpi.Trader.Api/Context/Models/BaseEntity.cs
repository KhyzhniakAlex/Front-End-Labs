using System;
using System.ComponentModel.DataAnnotations;

namespace Kpi.Trader.Api.Context.Models
{
    public class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }

        public DateTime ModifiedOn { get; set; } = DateTime.UtcNow;
    }
}
