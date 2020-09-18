using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using shop.Models;
using Shop.Data.Interfas.Administration;

namespace shop.Controllers.Authenticater
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomer _customerService;
        private readonly IMapper _mapper;
        public CustomerController(ICustomer customerService, IMapper mapper)
        {
            _mapper = mapper;
            _customerService = customerService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var Customer = _customerService.GetAll();

            var model = _mapper.Map<List<CustomerModel>>(Customer);

            return Ok(model);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _customerService.Delete(id);
            return Ok();
        }
    }
}