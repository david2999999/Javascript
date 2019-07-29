// The next three properties are all related to the request for the web page: URL, domain, and
// referrer. The URL property contains the complete URL of the page (the URL in the address bar),
// the domain property contains just the domain name of the page, and the referrer property gives the
// URL of the page that linked to this page. The referrer property may be an empty string if there
// is no referrer to the page. All of this information is available in the HTTP header of the request and is
// simply made available in JavaScript via these properties, as shown in the following example:

//get the complete URL
var url = document.URL;

//get the domain
var domain = document.domain;

//get the referrer
var referrer = document.referrer;

// The URL and domain properties are related. For example, if document.URL is http://www.wrox
// .com/WileyCDA/, then document.domain will be www.wrox.com.
// Of these three properties, the domain property is the only one that can be set. There are some
// restrictions as to what the value of domain can be set to because of security issues. If the URL
// contains a subdomain, such as p2p.wrox.com, the domain may be set only to 'wrox.com' (the same
// is true when the URL contains 'www,' such as www.wrox.com). The property can never be set to a
// domain that the URL doesn’t contain, as this example demonstrates:

//page from p2p.wrox.com
document.domain = 'wrox.com'; //succeeds
document.domain = 'nczonline.net'; //error!