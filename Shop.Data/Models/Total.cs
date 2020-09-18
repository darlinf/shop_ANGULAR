using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.Data.Entities
{
    public class Total
    {
        public int Id { get; set; }
        public decimal Revenue { get; set; }
        public int Orders { get; set; }
        public int Customers { get; set; }
        public int Product { get; set; }
    }
}
