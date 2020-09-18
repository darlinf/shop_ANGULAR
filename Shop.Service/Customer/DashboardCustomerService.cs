using Shop.Data;
using Shop.Data.Entities;
using Shop.Data.Interfas.Customer;
using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Shop.Service.Customer
{
    public class DashboardCustomerService : IDashboard
    {
        private readonly DataContext _context;
        public DashboardCustomerService(DataContext context)
        {
            _context = context;
        }

        public TotalCustomer DashboardTotals(int IdUser)
        {
            var dashboard = new TotalCustomer
            {
                PaidOrders = _context.Invoices.Where(x => x.PaymentStatus == "paid" && x.UserId == IdUser).ToArray().Length,
                DueOrders = _context.Invoices.Where(x => x.PaymentStatus == "due" && x.UserId == IdUser).ToArray().Length,
                TotalOrder = _context.Invoices.Where(x => x.UserId == IdUser).ToArray().Length
            };
            return dashboard;
        }

        public IEnumerable<Invoice> GetOrders(int IdUser)
        {
            return _context.Invoices.Where(x => x.UserId == IdUser).Take(5);    
        }
    }
}
