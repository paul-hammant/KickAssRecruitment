let p = location.pathname.replaceAll("KickAssRecruitment", "").replaceAll("/", "");

document.write('<p>SHA1 from the URL pathname: <span style="color:purple">' + p + '</span> (left of the \'/#\' in the URL)</p>')

let h = decodeURI(location.hash.substring(1)).replaceAll("<br>","\n").replaceAll("%20"," ");
let hh = h.replaceAll("\n", "<br>")

if (hh == null) {

    document.write('<p>No SHA1 comparison possible if there is no text right of the \'/#\' in the URL</p>');

} else {

    document.write('<p>Text (right of the \'/#\' in the URL):</p><div style="margin-left: 20px"><b style="color:red">' + hh + '</b></div>')


    let sha1 = new Hashes.SHA1().hex(h);

// output into DOM
    document.write('<p>SHA1: <span style="color:blue">' + sha1 + '</span></p>');

    if (p === sha1) {
        document.write('<p>✅ <span style="color:blue">SHA1</span> of the text passed <span style="color:red">right</span> of the \'/#\' in the URL matches the SHA1 of the <span style="color:purple">left</span> of the \'/#\' in the URL.<br>Claim verified, if the prospective employer hosts the SHA1.</p>');
    } else {
        document.write('<p>❌ <span style="color:blue">SHA1</span> of the text passed <span style="color:red">right</span> of the \'/#\' in the URL <b>DOES NOT MATCH</b> the SHA1 of the <span style="color:purple">left</span> of the \'/#\' in the URL<br>Claim not verified.</p>');
    }

    document.write("<p>When referring, emailing, or storing/noting the SHA1, never shorten it - always all 40 digits</p>\n" +
        "<p>If you are the candidate, you should have been emailed the above, too.</p>");

}