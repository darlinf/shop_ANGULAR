using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using shop.Helpers;
using shop.Models;
using Shop.Data;
using Shop.Data.Entities;

namespace shop.Controllers.Authenticater
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticaterController : ControllerBase
    {
        private readonly IAuthenticater _serviceAuthenticater;
        private readonly IMapper _mapper;
        public AuthenticaterController(IAuthenticater serviceAuthenticater, IMapper mapper)
        {
            _mapper = mapper;
            _serviceAuthenticater = serviceAuthenticater;
        }

        [HttpPost("Register")]
        public IActionResult Register([FromBody] RegisterModel model)
        {
            var user = _mapper.Map<User>(model);

            try
            {
                _serviceAuthenticater.Create(user, model.Password);
                return Ok();
            }
            catch (AppException ex)
            {
                return BadRequest(new { message = ex.Message });
            }


        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody] AuthenticateModel model)
        {
            var user = _serviceAuthenticater.Authentication(model.Email, model.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password in incorrect" });

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("uguygbuhbuybkhuihniuhiukguybguygbuig");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Email, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return Ok(new {
                email = user.Email,
                role = user.Role,
                token = tokenString,
                image = user.Image
            });
        }

        [HttpPost("GetImagenUser")]
        public IActionResult GetImagenUser(User user)
        {
            var Image = _serviceAuthenticater.GetImagenUser(user.Email);
            if (Image == null)
                return NotFound();
            return Ok(new { ImageUrl = Image });
        }

        [HttpGet("{email}")]
        public IActionResult GetById(string email)
        {
            var user = _serviceAuthenticater.GetByEmail(email);
            return Ok(user);
        }

        [HttpPut("{id}")]
        public IActionResult Edit([FromBody] User admin, [FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != admin.Id)
            {
                return BadRequest();
            }

            try
            {
                _serviceAuthenticater.UpdateAdmin(admin);
                return Ok();
            }
            catch (DbUpdateConcurrencyException)
            {
               return NoContent();
            }

            

        }

    }

}