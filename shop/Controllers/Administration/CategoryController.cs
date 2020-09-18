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
    public class CategoryController : ControllerBase
    {
        private readonly ICategory _categoryService;
        public CategoryController(ICategory categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var categories = _categoryService.GetAll();
            return Ok(categories);
        }

        [HttpGet("GetCategoryAndProduct")]
        public IActionResult GetCategoryAndProduct(){
            var categories = _categoryService.GetCategoryAndProduct();
            return Ok(categories);
        }

        [HttpGet("GetCategoryAndProduct/{id}")]
        public IActionResult GetCategoryAndProductFilter(int id){
            var categories = _categoryService.GetCategoryAndProductFilter(id);
            return Ok(categories);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var category = _categoryService.GetById(id);
            return Ok(category);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _categoryService.Delete(id);
            return Ok();
        }

        [HttpPost]
        public IActionResult Create(Category NewCategory)
        {
            _categoryService.Create(NewCategory);
            return Ok();
        }
    }
}