using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace zhixiangyin
{
    public class Global : System.Web.HttpApplication
    {
        public static Dictionary<string, string> HomePages;

        protected void Application_Start(object sender, EventArgs e)
        {
            PolyglotServerPages.WebApplication.Languages = new string[] { "en", "zh", "eo" };

            Global.HomePages = new Dictionary<string, string>();
            HomePages["zh"] = "NiHao";
            HomePages["en"] = "Hello";
            HomePages["eo"] = "Saluton";

            ispJs.WebApplication.RegisterSubPage("zh.isp.js");
            Action<Dictionary<string, object>, string> load = (locals, file) =>
                    {
                        var dic = new Dictionary<string, string>();
                        foreach (var key in HomePages.Keys)
                        {
                            if (System.IO.File.Exists(ispJs.WebApplication.Server.MapPath('/' +
                                (locals["$subPage"] as string).Replace('-', '/') + '.' + key + ".md"
                            )))
                            {
                                dic[key] = HomePages[key];
                            }
                        }
                        locals["langs"] = dic;
                    };
            ispJs.WebApplication.RegisterRenderer("zh.isp.js",
                new MarkdownServerPages.MarkdownRenderer(Server.MapPath("/") + "{0}.zh.md")
                {
                    Load = load,
                    Read = (subPage, file,found) =>
                    {
                        PolyglotServerPages.WebApplication.Preference = "zh";
                        ispJs.WebApplication.Response.AddHeader("Content-Language", "zh-cn");
                        thread404Status[System.Threading.Thread.CurrentThread.ManagedThreadId] = found;
                    },
                    PathTransforming = (path) => path.Replace('-', ispJs.Utility.PathSymbol)
                });


            ispJs.WebApplication.RegisterSubPage("en.isp.js");
            ispJs.WebApplication.RegisterRenderer("en.isp.js",
                new MarkdownServerPages.MarkdownRenderer(Server.MapPath("/") + "{0}.en.md")
                {
                    Load = load,
                    Read = (subPage, file, found) =>
                    {
                        PolyglotServerPages.WebApplication.Preference = "en";
                        ispJs.WebApplication.Response.AddHeader("Content-Language", "en");
                        thread404Status[System.Threading.Thread.CurrentThread.ManagedThreadId] = found;
                    },
                    PathTransforming = (path) => path.Replace('-', ispJs.Utility.PathSymbol)
                });
            ispJs.WebApplication.RegisterRenderer("About.zh.isp.js", new LangRenderer("zh"));
            ispJs.WebApplication.RegisterRenderer("About.en.isp.js", new LangRenderer("en"));
            ispJs.WebApplication.RegisterRenderer("About.eo.isp.js", new LangRenderer("eo"));


            ispJs.WebApplication.RegisterRenderer("CV.zh.isp.js", new LangRenderer("zh"));
            ispJs.WebApplication.RegisterRenderer("CV.en.isp.js", new LangRenderer("en"));
            ispJs.WebApplication.RegisterRenderer("CV.eo.isp.js", new LangRenderer("eo"));
            ispJs.WebApplication.HandleStart(Server);
        }

        static Dictionary<int, bool> thread404Status = new Dictionary<int, bool>();
        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            ispJs.WebApplication.HandleBeginRequest();
        }

        protected void Application_PreSendRequestHeaders(object sender, EventArgs e)
        {
            try
            {
                if (!thread404Status[System.Threading.Thread.CurrentThread.ManagedThreadId])
                {
                    thread404Status[System.Threading.Thread.CurrentThread.ManagedThreadId] = true;
                    Response.StatusCode = 404;
                }
            }
            catch (KeyNotFoundException) { }
            var path = Request.Path;
            var exts = new[] { "js", "css", "jpeg", "jpg", "gif", "png", "swf", "pdf" };
            var ext = "";
            try
            {
                ext = path.Substring(path.LastIndexOf('.') + 1);
            }
            catch { }
            if (!(path.Contains('.') && exts.Contains(ext)))
            {
                Response.ContentType = "text/html";
            }
        }
        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {
            ispJs.WebApplication.HandleEnd();
        }
    }
}