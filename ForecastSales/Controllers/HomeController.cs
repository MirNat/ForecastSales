﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace ForecastSales.Controllers
{
    //[Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return new FilePathResult("~/ui/index.html", "text/html");
        }
    }
}
