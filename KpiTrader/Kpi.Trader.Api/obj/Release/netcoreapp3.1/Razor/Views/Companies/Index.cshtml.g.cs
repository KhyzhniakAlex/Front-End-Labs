#pragma checksum "C:\Users\Oleksii Tymchenko\source\repos\KpiTrader\Kpi.Trader.Api\Views\Companies\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5a094da21193ef11d09007dcdeb65c9f7ab48bb0"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Companies_Index), @"mvc.1.0.view", @"/Views/Companies/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\Oleksii Tymchenko\source\repos\KpiTrader\Kpi.Trader.Api\Views\_ViewImports.cshtml"
using Kpi.Trader.Api;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Oleksii Tymchenko\source\repos\KpiTrader\Kpi.Trader.Api\Views\_ViewImports.cshtml"
using Kpi.Trader.Api.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5a094da21193ef11d09007dcdeb65c9f7ab48bb0", @"/Views/Companies/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f6fea81266823f7f7cd95bdc8495ab735f97064c", @"/Views/_ViewImports.cshtml")]
    public class Views_Companies_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<Kpi.Trader.Api.Context.Models.Company>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("asp-action", "Create", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Users\Oleksii Tymchenko\source\repos\KpiTrader\Kpi.Trader.Api\Views\Companies\Index.cshtml"
  
    ViewData["Title"] = "Index";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<h1>Index</h1>\r\n<h1>Utilized JQuery</h1>\r\n\r\n<p>\r\n    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("a", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "5a094da21193ef11d09007dcdeb65c9f7ab48bb03779", async() => {
                WriteLiteral("Create New");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.AnchorTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_AnchorTagHelper.Action = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
</p>
<table class=""table"">
    <thead>
        <tr>
            <th>
                FullName
            </th>
            <th>
                Ticker
            </th>
            <th>
                ModifiedOn
            </th>
            <th></th>
        </tr>
    </thead>
    <tbody id=""tableBody"">
    </tbody>
</table>
");
            DefineSection("Scripts", async() => {
                WriteLiteral(@"
    <script>
        $(document).ready(() => {
            console.log('document-ready');
            $.get({
                url: '../../api/companies/',
                success: (data) => {
                    $.each(data, (index, item) => {
                        $('#tableBody').append(`
                            <tr>
                                <td>${item.fullName}</td>
                                <td>${item.ticker}</td>
                                <td>${item.modifiedOn}</td>
                                <td>
                                    <a href=""#"" onclick=""redirectToEdit('${item.id}')"">Edit</a>|
                                    <a href=""#"" onclick=""redirectToDetails('${item.id}')"">Details</a>|
                                    <a href=""#"" onclick=""redirectToDelete('${item.id}')"">Delete</a>
                                </td>
                            </tr>`);
                    });
                    console.log(data);
                }
        ");
                WriteLiteral(@"    });
        });
        const redirectToList = () => window.location.replace(""../../companies"");
        const redirectToEdit = (modelId) => window.location.replace(`../../companies/edit/${modelId}`);
        const redirectToDetails = (modelId) => window.location.replace(`../../companies/details/${modelId}`);
        const redirectToDelete = (modelId) => window.location.replace(`../../companies/delete/${modelId}`);
        const redirectToCreate = () => window.location.replace(`../../companies/create`);
    </script>
");
            }
            );
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<Kpi.Trader.Api.Context.Models.Company>> Html { get; private set; }
    }
}
#pragma warning restore 1591
