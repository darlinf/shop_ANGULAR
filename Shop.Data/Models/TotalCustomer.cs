using Shop.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.Data.Models
{
    public class TotalCustomer
    {
        public int TotalOrder { get; set; }
        public int PaidOrders { get; set; }
        public int DueOrders { get; set; }
    }
}
