var swiper = new Swiper(".header-carousel", {
        slidesPerView: 2,
        spaceBetween: 40,
        autoplay: {
            delay: 4500,
            disableOnInteraction: !1
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
    }),
    swiper = new Swiper(".type-carousel", {
        slidesPerView: 3,
        loop: !0,
        spaceBetween: 40,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: !1
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    }),
    swiper = new Swiper(".sidebar-carousel", {
        slidesPerView: 1,
        loop: !0,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: !1
        }
    });


jQuery(function($) {

    $(window).scroll((function() {
        var height;
        $(window).scrollTop() > 60 ? $(".navbar").addClass("navbar-fixed") : $(".navbar").removeClass("navbar-fixed")
    }));

    function translit(word) {
        var answer = '';
        var converter = {
            'а': 'a',
            'б': 'b',
            'в': 'v',
            'г': 'g',
            'д': 'd',
            'е': 'e',
            'ё': 'e',
            'ж': 'zh',
            'з': 'z',
            'и': 'i',
            'й': 'y',
            'к': 'k',
            'л': 'l',
            'м': 'm',
            'н': 'n',
            'о': 'o',
            'п': 'p',
            'р': 'r',
            'с': 's',
            'т': 't',
            'у': 'u',
            'ф': 'f',
            'х': 'h',
            'ц': 'c',
            'ч': 'ch',
            'ш': 'sh',
            'щ': 'sch',
            'ь': '',
            'ы': 'y',
            'ъ': '',
            'э': 'e',
            'ю': 'yu',
            'я': 'ya',

            'А': 'A',
            'Б': 'B',
            'В': 'V',
            'Г': 'G',
            'Д': 'D',
            'Е': 'E',
            'Ё': 'E',
            'Ж': 'Zh',
            'З': 'Z',
            'И': 'I',
            'Й': 'Y',
            'К': 'K',
            'Л': 'L',
            'М': 'M',
            'Н': 'N',
            'О': 'O',
            'П': 'P',
            'Р': 'R',
            'С': 'S',
            'Т': 'T',
            'У': 'U',
            'Ф': 'F',
            'Х': 'H',
            'Ц': 'C',
            'Ч': 'Ch',
            'Ш': 'Sh',
            'Щ': 'Sch',
            'Ь': '',
            'Ы': 'Y',
            'Ъ': '',
            'Э': 'E',
            'Ю': 'Yu',
            'Я': 'Ya'
        };

        for (var i = 0; i < word.length; ++i) {
            if (converter[word[i]] == undefined) {
                answer += word[i];
            } else {
                answer += converter[word[i]];
            }
        }

        return answer;
    }

    jQuery('.content h2, .content h3').each(function(index, element) {
        var title = jQuery(this).text();
        var title = translit(title);
        var title = title.replace(/[\W_]/g, "-");

        jQuery(this).attr('id', title);
    });

    jQuery.tableOfContents = function(tocList) {
        $(tocList).empty();
        var prevH2Item = '';
        var prevH2List = '';
        var index = 0;

        $(".content h2").each(function() {
            var title = $(this).attr('id');
            //insert an anchor to jump to, from the TOC link.
            var anchor = "<a name='" + title + "'></a>";
            // $(this).before(anchor);

            var li = "<li><a href='#" + title + "'>" +
                $(this).text() + "</a></li>";
            if ($(this).is("h2")) {
                prevH2List = $("<ul></ul>");
                prevH2Item = $(li);
                prevH2Item.append(prevH2List);
                prevH2Item.appendTo(tocList);
            } else {
                prevH2List.append(li);
            }
            index++;
        });
    }
    $('.toc-list').append('<ol></ol>');
    jQuery.tableOfContents('.toc-list ol');

    $("body").on('click', '[href*="#"]', function(e) {
        var fixed_offset = 70;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });
});