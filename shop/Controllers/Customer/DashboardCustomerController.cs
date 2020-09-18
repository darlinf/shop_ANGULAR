using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using shop.Models;
using Shop.Data.Interfas.Customer;

namespace shop.Controllers.Authenticater
{
    [Route("api/[controller]")]
    [ApiController]
    public class DashboardCustomerController : ControllerBase
    {
        private readonly IDashboard _dashboardService;
        private readonly IMapper _mapper;
        public DashboardCustomerController(
            IDashboard dashboardService,
            IMapper mapper
            )
        {
            _mapper = mapper;
            _dashboardService = dashboardService;
        }

        [HttpGet("GetDashboard/{id}")]
        public IActionResult GetDashboard(int id)
        {
            var dashboard = _dashboardService.DashboardTotals(id);
            return Ok(dashboard);
        }

        [HttpGet("GetOrders/{id}")]
        public IActionResult GetOrders(int id)
        {
            var orders = _dashboardService.GetOrders(id);
            var model = _mapper.Map<List<OrdersCustomerModel>>(orders);
            return Ok(model);
        }

    }
}