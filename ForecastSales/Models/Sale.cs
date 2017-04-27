using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ForecastSales.Models
{
    public class Sale
    {
        [Required]
        public int Id { get; set; }

        public int ProductId { get; set; }

        [Required]
        public double Value { get; set; }

        public DateTime Date { get; set; }

        public int StoreId { get; set; }
    }
}