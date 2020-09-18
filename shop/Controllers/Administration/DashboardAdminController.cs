using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using shop.Models;
using Shop.Data.Interfas.Administration;
using Shop.Service.Administration;

namespace shop.Controllers.Administration
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardAdminController : ControllerBase
    {
        private readonly IDashboard _serviceDashboard;
        public DashboardAdminController(IDashboard serviceDashboard)
        {
            _serviceDashboard = serviceDashboard;
        }

        [HttpGet("dashboard")]
        public IActionResult DashboardTotals()
        {
            var dashboard = _serviceDashboard.DashboardTotals();
            return Ok(dashboard);
        }

        [HttpGet("orders")]
        public IActionResult GetOrders()
        {

            var customer = _serviceDashboard.GetOrders();
            return Ok(customer);
        }
    }
}