using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shop.Data.Entities;
using Shop.Data.Interfas.Administration;

namespace shop.Controllers.Authenticater
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        private readonly ISales _saleService;
        public SalesController(ISales saleService)
        {
            _saleService = saleService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var sales = _saleService.GetAll();
            return Ok(sales);
        }

        [HttpPost]
        public IActionResult Create(Invoice newInvoice)
        {
            _saleService.Create(newInvoice);
            return Ok();
        }
    }
}