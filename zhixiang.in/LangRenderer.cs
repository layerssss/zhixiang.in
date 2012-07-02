using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace zhixiangyin
{

    public class LangRenderer : ispJs.IISPAC, ispJs.IISPRenderer
    {
        private string lang;
        #region IISPAC 成员

        public LangRenderer(string lang)
        {
            this.lang = lang;
        }
        public void Page_Read(string subPage)
        {
            PolyglotServerPages.WebApplication.Preference = this.lang;
        }

        #endregion

        #region IISPRenderer 成员

        public void Page_Load(Dictionary<string, object> locals)
        {
        }

        #endregion

        #region IDisposable 成员

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}