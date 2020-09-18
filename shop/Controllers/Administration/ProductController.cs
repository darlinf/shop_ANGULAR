using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Shop.Data.Interfas.Administration;
using Shop.Data.Models;

namespace shop.Controllers.Authenticater
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProduct _serviceProduct;
        public ProductController(IProduct serviceProduct)
        {
            _serviceProduct = serviceProduct;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var products = _serviceProduct.GetAll();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var product = _serviceProduct.GetById(id);
            return Ok();
        }

        [HttpPost]
        public IActionResult Create(Product NewProduct)
        {
            _serviceProduct.Create(NewProduct);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _serviceProduct.Delete(id);
            return Ok();
        }



    }
}