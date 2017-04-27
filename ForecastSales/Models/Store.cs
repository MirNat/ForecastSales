using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ForecastSales.Models
{
    public class Store
    {

        [Required]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public int ChainId { get; set; }
    }
}