using Shop.Data.Entities;
using Shop.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.Data.Interfas.Customer
{
    public interface IDashboard
    {
        TotalCustomer DashboardTotals(int IdUser);
        IEnumerable<Invoice> GetOrders(int IdUser);
    }
}
