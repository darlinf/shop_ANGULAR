using Shop.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Shop.Data.Interfas.Administration
{
    public interface IDashboard
    {
        Total DashboardTotals();
        IEnumerable<Object> GetOrders();
    }
}
