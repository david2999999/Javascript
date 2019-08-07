// As mentioned previously, scrolling is one area where specifi cations didn’t exist prior to HTML5.
// While scrollIntoView() was standardized in HTML5, there are still several additional
// proprietary methods available in various browsers. Each of the following methods exists as an
// extension to the HTMLElement type and therefore each is available on all elements:
    // scrollIntoViewIfNeeded(alignCenter) — Scrolls the browser window or container
        // element so that the element is visible in the viewport only if it’s not already visible; if
        // the element is already visible in the viewport, this method does nothing. The optional
        // alignCenter argument will attempt to place the element in the center of the viewport if
        // set to true. This is implemented in Safari and Chrome.

    // scrollByLines(lineCount) — Scrolls the contents of the element by the height of the
        // given number of text lines, which may be positive or negative. This is implemented in
        // Safari and Chrome.

    // scrollByPages(pageCount) — Scrolls the contents of the element by the height of a
        // page, which is determined by the height of the element. This is implemented in Safari and
        // Chrome.

//scroll body by five lines
document.body.scrollByLines(5);

//make sure this element is visible only if it’s not already
document.images[0].scrollIntoViewIfNeeded();

//scroll the body back up one page
document.body.scrollByPages(-1);