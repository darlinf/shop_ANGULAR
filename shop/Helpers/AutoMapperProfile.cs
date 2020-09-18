using AutoMapper;
using shop.Models;
using Shop.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace shop.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User,CustomerModel>();
            CreateMap<RegisterModel, User>();
            CreateMap<Invoice, OrdersCustomerModel>();
        }
    }
}
