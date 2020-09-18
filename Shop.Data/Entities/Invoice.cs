
using System;

namespace Shop.Data.Entities
{
    public class Invoice
    {
        public int Id { get; set; }
        public string Item { get; set; }
        public DateTime Date { get; set; }
        public int Quantity { get; set; }
        public string PaymentStatus { get; set; }
        public string PaymentMethos { get; set; }
        public decimal UnitCost { get; set; }
        public int Amount { get; set; }
        public decimal Discount { get; set; }
        public decimal TotalAmount { get; set; }
        public int UserId { get; set; }
    }

}
