using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using OnboardingTask1.Models;
using Microsoft.AspNetCore.Cors;
using System;

namespace OnboardingTask1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        public OnBoardingTask1Context _onboardingTask1Context;
        public CustomerController(OnBoardingTask1Context onboardingTask1Context)
        {
            _onboardingTask1Context = onboardingTask1Context;
        }

        [HttpGet]
        [Route("getCustomers")]
        public async Task<ActionResult<IEnumerable<Customer>>> getCustomers()
        {
            if (_onboardingTask1Context.Customer == null)
                return NotFound();
            return await _onboardingTask1Context.Customer.ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Customer>> getCustomer(int id)
        {
            if (_onboardingTask1Context.Customer == null)
                return NotFound();

            var customer = await _onboardingTask1Context.Customer.FindAsync(id);

            if (customer == null)
                return NotFound();

            return customer;
        }

        //[HttpPut]
        //public async Task<ActionResult<Customer>> editCustomer(Customer customer )
        //{

        //    _onboardingTask1Context.Customer.Update(customer);
        //    await _onboardingTask1Context.SaveChangesAsync();

        //    return customer;
        //}

        [Route("addCustomer")]
        [HttpPost]
        public String addCustomer(Customer customer)
        {
            //Customer customer = new Customer {Name = customerName , Address = customerAddress };
            _onboardingTask1Context.Customer.Add(customer);
            _onboardingTask1Context.SaveChanges();

            return "Added Successfuly";
        }

        [Route("deleteCustomer/{id:int}")]
        public String deleteCustomer(int id)
        {
            var customer = _onboardingTask1Context.Customer.Find(id);

            if (customer == null)
                return "NotFound";

            _onboardingTask1Context.Customer.Remove(customer);
            _onboardingTask1Context.SaveChanges();
            return "Successfull";
        }
    }
}
