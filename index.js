var likeCount = 0;
var commentCount = 0;

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loop() {
    console.log("Script loading…please wait…");
    var Time1 = Math.ceil(Math.random() * 10) + 3;
    var Time2 = Math.ceil(Math.random() * 10) + 3;
    var randomSkip = Math.random() * 10;

    setTimeout(async function () {
        //like
        if (document.querySelectorAll('svg[aria-label="Unlike"]')[0]) {
            console.log("Already Liked");
        } else if (parseInt(randomSkip) >= 7) {
            //we skip some of the post, we dont want to be a heart sleuth
            console.log("Random Skipping: " + parseInt(randomSkip));
        } else if (likeCount % 5 === 0 && likeCount != 0) {
            likeCount++;
            console.log(
                "Pausing for 2 minutes..."
            );
            await sleep(2 * 60 * 1000);
        } else if (likeCount % 20 === 0 && likeCount != 0) {
            likeCount++;
            console.log(
                "Pausing for 10 minutes..."
            );
            await sleep(10 * 60 * 1000);
        } else {
            likeCount++;
            console.log("Liking the post");
            //Like
            var btn = document.querySelectorAll('svg[aria-label="Like"]');
            btn[0].parentElement.click();
        }

        //comment
        if (parseInt(randomSkip) >= 7) {
            console.log("Random Skipping: " + parseInt(randomSkip));
        } else if (
            document.querySelectorAll('textarea[aria-label="Add a comment…"]')
        ) {
            var btn = document.querySelectorAll(
                'textarea[aria-label="Add a comment…"]'
            );
            if (btn.length) {
                btn[0].click();
                console.log("commenting... the post");
                btn[0].textContent = "I am the reflection of the light of Islam 🖤🖤";
                var inputEvent = new Event("input", {
                    bubbles: true,
                    cancelable: true,
                });
                btn[0].dispatchEvent(inputEvent);
                if (
                    document.querySelectorAll(
                        "body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe.x1qjc9v5.xjbqb8w.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.xr1yuqi.xkrivgy.x4ii5y1.x1gryazu.x15h9jz8.x47corl.xh8yej3.xir0mxb.x1juhsu6 > div > article > div > div._ae65 > div > div > div._ae2s._ae3v._ae3w > section._aaoe._ae5y._ae5z._ae62 > div > form > div > div._am-5 > div"
                    )
                ) {
                    var postBtn = document.querySelectorAll(
                        "body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe.x1qjc9v5.xjbqb8w.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.xr1yuqi.xkrivgy.x4ii5y1.x1gryazu.x15h9jz8.x47corl.xh8yej3.xir0mxb.x1juhsu6 > div > article > div > div._ae65 > div > div > div._ae2s._ae3v._ae3w > section._aaoe._ae5y._ae5z._ae62 > div > form > div > div._am-5 > div"
                    );
                    if (postBtn[0].textContent == "Post") {
                        postBtn[0].click();
                        console.log("post comment");
                    }
                } else {
                    console.log("post btn not found");
                }
            } else {
                console.log("comment btn not found");
            }

            commentCount++;
        }

        //next
        setTimeout(function () {
            if (document.querySelectorAll("svg[aria-label='Next']").length) {
                console.log("Loading next post");
                console.log("Totally liked : " + likeCount);
                console.log("Totally comment : " + commentCount);
                var btn = document.querySelectorAll("svg[aria-label='Next']");
                btn[0].parentElement.click();
            } else {
                console.log("No more posts on this tag!");
            }
            loop();
        }, Time1 * 1000);
    }, Time2 * 1000);
}

loop();
