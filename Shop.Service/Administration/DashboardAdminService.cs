using Microsoft.EntityFrameworkCore;
using Shop.Data;
using Shop.Data.Entities;
using Shop.Data.Interfas.Administration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace Shop.Service.Administration
{
    public class DashboardAdminService : IDashboard
    {
        private readonly DataContext _context;
        public DashboardAdminService(DataContext context)
        {
            _context = context;
        }


        public Total DashboardTotals()
        {

            var revenue = _context.Invoices.Where(x => x.PaymentStatus == "paid")
                                            .Select(x => x.TotalAmount).ToArray();
            decimal sumRevenue = 0;
            foreach (var item in revenue)
                sumRevenue += item;

            var order = _context.Invoices.Select(x => x.PaymentMethos).ToArray().Length;

            var customer = _context.Users.Select(x => x.Id).ToArray().Length;

            var product = _context.Products.Select(x => x.Stock).ToArray();
            int sumProduct = 0;
            foreach (var item in product)
                sumProduct += item;

            var totals = new Total
            {
                Revenue = sumRevenue,
                Orders = order,
                Customers = customer,
                Product = sumProduct
            };

            var poo = _context.Users.Select(x => x.Invoices);

            return totals;
        }


        public IEnumerable<Object> GetOrders()
        {

             var oders = (from invoice in _context.Invoices
                            from user in _context.Users
                            where invoice.UserId == user.Id
                            select new {
                                invoice.Date,
                                user.Name,
                                invoice.Item,
                                invoice.TotalAmount,
                                invoice.PaymentStatus,
                                invoice.PaymentMethos
                            }).Take(5);

            return oders;
        }
    }
}
