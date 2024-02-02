import * as React from "react";

export function Demo(asciinemaId: string) {
  // function t(t) {
  //   const e = (function (t) {
  //     const e = document.createElement("a");
  //     return (e.href = t), e;
  //   })(t.src);
  //   return e.protocol + "//" + e.host;
  // }
  // [].forEach.call(
  //   document.querySelectorAll("script[id^='asciicast-']"),
  //   function (e) {
  //     if (void 0 !== e.dataset.initialized) return;
  //     const i = t(e),
  //       a = e.id.split("-")[1],
  //       s = document.createElement("div");
  //     var n, o;
  //     (s.id = "asciicast-container-" + a),
  //       (s.className = "asciicast"),
  //       (s.style.display = "block"),
  //       (s.style.float = "none"),
  //       (s.style.overflow = "hidden"),
  //       (s.style.padding = 0),
  //       (s.style.margin = "20px 0"),
  //       (o = s),
  //       (n = e).parentNode.insertBefore(o, n.nextSibling);
  //     const l = document.createElement("iframe");
  //     (l.src =
  //       i +
  //       "/a/" +
  //       a +
  //       "/iframe?" +
  //       (function (t, e) {
  //         void 0 !== e.dataset.t && (e.dataset.startAt = e.dataset.t),
  //           void 0 !== e.dataset.i && (e.dataset.idleTimeLimit = e.dataset.i),
  //           "" === e.dataset.autoplay && (e.dataset.autoplay = "1"),
  //           "" === e.dataset.loop && (e.dataset.loop = "1"),
  //           "" === e.dataset.preload && (e.dataset.preload = "1");
  //         const i = new Set([
  //           "speed",
  //           "autoplay",
  //           "loop",
  //           "theme",
  //           "startAt",
  //           "preload",
  //           "cols",
  //           "rows",
  //           "idleTimeLimit",
  //           "poster",
  //         ]);
  //         return Object.entries(e.dataset)
  //           .filter(([t, e]) => i.has(t))
  //           .map((t) => t.join("="))
  //           .join("&");
  //       })(0, e)),
  //       (l.id = "asciicast-iframe-" + a),
  //       (l.name = "asciicast-iframe-" + a),
  //       (l.scrolling = "no"),
  //       l.setAttribute("allowFullScreen", "true"),
  //       (l.style.overflow = "hidden"),
  //       (l.style.margin = 0),
  //       (l.style.border = 0),
  //       (l.style.display = "inline-block"),
  //       (l.style.width = "100%"),
  //       (l.style.float = "none"),
  //       (l.style.visibility = "hidden"),
  //       (l.onload = function () {
  //         this.style.visibility = "visible";
  //       }),
  //       s.appendChild(l),
  //       window.addEventListener(
  //         "message",
  //         function (t) {
  //           const e = t.data[0],
  //             a = t.data[1];
  //           t.origin === i &&
  //             t.source === l.contentWindow &&
  //             "resize" === e &&
  //             (l.style.height = a.height + "px");
  //         },
  //         !1
  //       ),
  //       (e.dataset.initialized = "1");
  //   }
  // );
  return (
    <div id="player" style={{ width: "100%" }}>
      <div className="ap-wrapper">
        <div
          className="ap-player asciinema-theme-dracula"
          style={{ width: "688px", height: "463.163856px" }}
        >
          <pre
            className="ap-terminal ap-cursor ap-blink"
            aria-live="polite"
            style={{
              width: "104ch",
              height: "38.666667em",
              fontSize: "71.621903%",
              lineHeight: "1.333333em",
            }}
          >
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-3 bg-0">|</span>
              <span className=" fg-15 bg-0 ap-bright"> </span>
              <span className=" fg-3 bg-0">|</span>
              <span className=" fg-15 bg-0 ap-bright"> </span>
              <span className=" fg-3 bg-0">|</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-15 bg-0 ap-bright">(_( (_( (_(</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> /</span>
              <span className=" fg-15 bg-0 ap-bright">(___((___((___(</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> //</span>
              <span className=" fg-15 bg-0 ap-bright">(_____(____(____(</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-3 bg-0">__</span>
              <span className=" fg-7 bg-0">///</span>
              <span className=" fg-3 bg-0">____|____|____|_____</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-6 bg-0">
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
              </span>
              <span className=" fg-3 bg-0">\</span>
              <span className=" fg-15 bg-0 ap-bright"> </span>
              <span className=" fg-3 bg-0">/</span>
              <span className=" fg-6 bg-0">
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
              </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-6 bg-0">
                ^^^^ ^^^ ^^^ ^^^ ^^^^ ^^^^ ^^^ ^^^ ^^^ ^^^^ ^^^^ ^^^ ^^^ ^^^
                ^^^^ ^^^^{" "}
              </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-6 bg-0">
                ^^^^ ^^^^ ^^^ ^^ ^^^^ ^^^^ ^^^ ^^ ^^^^ ^^^^ ^^^ ^^ ^^^^{" "}
              </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-6 bg-0">
                ^^ ^^^^ ^^^ ^^^^^^ ^^ ^^^^ ^^^ ^^^^^^ ^^ ^^^^ ^^^ ^^^^^^ ^^{" "}
              </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-14 bg-0 ap-bright">.</span>
              <span className=" fg-2 bg-0">/</span>
              <span className=" fg-10 bg-0 ap-bright">..</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-12 bg-0 ap-bright">&lt;</span>
              <span className=" fg-15 bg-0 ap-bright">'</span>
              <span className=" fg-10 bg-0 ap-bright">)</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-10 bg-0 ap-bright">`</span>
              <span className=" fg-11 bg-0 ap-bright">=&lt;</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-10 bg-0 ap-bright">``\```</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-8 bg-0 ap-bright"> T</span>
              <span className=" fg-9 bg-0 ap-bright">~~</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-8 bg-0 ap-bright"> |</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-8 bg-0 ap-bright"> </span>
              <span className=" fg-14 bg-0 ap-bright">/</span>
              <span className=" fg-8 bg-0 ap-bright"> </span>
              <span className=" fg-3 bg-0">/^\</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-8 bg-0 ap-bright"> </span>
              <span className=" fg-10 bg-0 ap-bright">/</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-10 bg-0 ap-bright">\</span>
              <span className=" fg-8 bg-0 ap-bright"> </span>
              <span className=" fg-3 bg-0">/</span>
              <span className=" fg-8 bg-0 ap-bright"> </span>
              <span className=" fg-3 bg-0">\</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-14 bg-0 ap-bright">.</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-8 bg-0 ap-bright"> _ _ </span>
              <span className=" fg-10 bg-0 ap-bright">&lt;</span>
              <span className=" fg-15 bg-0 ap-bright">'</span>
              <span className=" fg-12 bg-0 ap-bright">)</span>
              <span className=" fg-10 bg-0 ap-bright">_</span>
              <span className=" fg-2 bg-0">=&lt;</span>
              <span className=" fg-8 bg-0 ap-bright"> </span>
              <span className=" fg-3 bg-0">\</span>
              <span className=" fg-8 bg-0 ap-bright"> _ _ _</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-5 bg-0">&gt;</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-10 bg-0 ap-bright">/</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-8 bg-0 ap-bright">[ ]_[ ]_[</span>
              <span className=" fg-10 bg-0 ap-bright">\_/</span>
              <span className=" fg-8 bg-0 ap-bright"> _ _ </span>
              <span className=" fg-3 bg-0">\</span>
              <span className=" fg-8 bg-0 ap-bright">[ ]_[ </span>
              <span className=" fg-12 bg-0 ap-bright">/</span>
              <span className=" fg-8 bg-0 ap-bright">_[ ]</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">,..</span>
              <span className=" fg-10 bg-0 ap-bright">/</span>
              <span className=" fg-2 bg-0">...</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-8 bg-0 ap-bright">|_=__-_ =_</span>
              <span className=" fg-4 bg-0">\</span>
              <span className=" fg-8 bg-0 ap-bright">_[ ]_[ ]_|_=-_</span>
              <span className=" fg-12 bg-0 ap-bright">/--\</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-3 bg-0">/</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">/</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">'\</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-4 bg-0">/</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-8 bg-0 ap-bright"> | _- = | =_ = _ |= </span>
              <span className=" fg-12 bg-0 ap-bright">&lt;</span>
              <span className=" fg-15 bg-0 ap-bright">o</span>
              <span className=" fg-14 bg-0 ap-bright">)</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-3 bg-0">=&lt;</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">(</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">(</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-6 bg-0">&lt;</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-15 bg-0 ap-bright">'</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">)</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-4 bg-0">=&lt;</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-8 bg-0 ap-bright"> |= -[] |- = _ = </span>
              <span className=" fg-2 bg-0"> )</span>
              <span className=" fg-8 bg-0 ap-bright">|_-=</span>
              <span className=" fg-12 bg-0 ap-bright">\__/</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-3 bg-0">\</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0"> )</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0"> )</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">\</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-14 bg-0 ap-bright">\</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">/</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-4 bg-0">\</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-8 bg-0 ap-bright"> | =_ |= - </span>
              <span className=" fg-3 bg-0">___</span>
              <span className=" fg-8 bg-0 ap-bright"> </span>
              <span className=" fg-2 bg-0">(</span>
              <span className=" fg-8 bg-0 ap-bright"> | =_ </span>
              <span className=" fg-2 bg-0">\</span>
              <span className=" fg-8 bg-0 ap-bright"> |</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">(</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">(</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">`'</span>
              <span className=" fg-14 bg-0 ap-bright">\</span>
              <span className=" fg-2 bg-0">'"'"'</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-8 bg-0 ap-bright"> |= []- |- </span>
              <span className=" fg-3 bg-0">/|</span>
              <span className=" fg-8 bg-0 ap-bright"> </span>
              <span className=" fg-3 bg-0">|\</span>
              <span className=" fg-8 bg-0 ap-bright"> </span>
              <span className=" fg-2 bg-0"> )</span>
              <span className=" fg-8 bg-0 ap-bright">|=_</span>
              <span className=" fg-2 bg-0"> )</span>
              <span className=" fg-8 bg-0 ap-bright">[] |</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0"> )</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0"> )</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">(</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0"> )</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-8 bg-0 ap-bright"> |- =_ | =</span>
              <span className=" fg-3 bg-0">|</span>
              <span className=" fg-8 bg-0 ap-bright"> </span>
              <span className=" fg-3 bg-0">|</span>
              <span className=" fg-8 bg-0 ap-bright"> </span>
              <span className=" fg-3 bg-0">|</span>
              <span className=" fg-8 bg-0 ap-bright"> </span>
              <span className=" fg-3 bg-0">|</span>
              <span className=" fg-2 bg-0">(</span>
              <span className=" fg-8 bg-0 ap-bright"> |- </span>
              <span className=" fg-2 bg-0">(</span>
              <span className=" fg-8 bg-0 ap-bright"> - |</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
            <span
              className="ap-line"
              role="paragraph"
              style={{ height: "1.333333em" }}
            >
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">(</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0">(</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-2 bg-0"> )(</span>
              <span className=" fg-7 bg-0"> </span>
              <span className=" fg-8 bg-0 ap-bright"> |_______|__</span>
              <span className=" fg-3 bg-0">|_|_|_|</span>
              <span className=" fg-2 bg-0"> )</span>
              <span className=" fg-8 bg-0 ap-bright">|__</span>
              <span className=" fg-2 bg-0"> )</span>
              <span className=" fg-8 bg-0 ap-bright">___|</span>
              <span className=" fg-7 bg-0"> </span>
            </span>
          </pre>
          <div className="ap-control-bar ap-seekable">
            <span className="ap-playback-button">
              <svg
                version="1.1"
                viewBox="0 0 12 12"
                className="ap-icon"
                aria-label="Play"
                role="button"
                tabIndex={0}
              >
                <path d="M1,0 L11,6 L1,12 Z"></path>
              </svg>
            </span>
            <span
              className="ap-timer"
              aria-readonly="true"
              role="textbox"
              tabIndex={0}
            >
              <span className="ap-time-elapsed">00:00</span>
              <span className="ap-time-remaining">-01:01</span>
            </span>
            <span className="ap-progressbar">
              <span className="ap-bar">
                <span className="ap-gutter">
                  <span
                    className="ap-gutter-fill"
                    style={{
                      width: "100%",
                      transform: "scaleX(0)",
                      transformOrigin: "left center",
                    }}
                  ></span>
                </span>
              </span>
            </span>
            <span
              className="ap-fullscreen-button"
              title="Toggle fullscreen mode"
              aria-label="Toggle Fullscreen"
              role="button"
              tabIndex={0}
            >
              <svg version="1.1" viewBox="0 0 12 12" className="ap-icon">
                <path d="M12,0 L7,0 L9,2 L7,4 L8,5 L10,3 L12,5 Z"></path>
                <path d="M0,12 L0,7 L2,9 L4,7 L5,8 L3,10 L5,12 Z"></path>
              </svg>
              <svg version="1.1" viewBox="0 0 12 12" className="ap-icon">
                <path d="M7,5 L7,0 L9,2 L11,0 L12,1 L10,3 L12,5 Z"></path>
                <path d="M5,7 L0,7 L2,9 L0,11 L1,12 L3,10 L5,12 Z"></path>
              </svg>
            </span>
          </div>
          <div className="ap-overlay ap-overlay-start">
            <div className="ap-play-button">
              <div>
                <span>
                  <svg
                    version="1.1"
                    viewBox="0 0 1000.0 1000.0"
                    className="ap-icon"
                  >
                    <defs>
                      <mask id="small-triangle-mask">
                        <rect width="100%" height="100%" fill="white"></rect>
                        <polygon
                          points="700.0 500.0, 400.00000000000006 326.7949192431122, 399.9999999999999 673.2050807568877"
                          fill="black"
                        ></polygon>
                      </mask>
                    </defs>
                    <polygon
                      points="1000.0 500.0, 250.0000000000001 66.98729810778059, 249.99999999999977 933.0127018922192"
                      mask="url(#small-triangle-mask)"
                      fill="white"
                      className="ap-play-btn-fill"
                    ></polygon>
                    <polyline
                      points="673.2050807568878 400.0, 326.7949192431123 600.0"
                      stroke="white"
                      strokeWidth="90"
                      className="ap-play-btn-stroke"
                    ></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
