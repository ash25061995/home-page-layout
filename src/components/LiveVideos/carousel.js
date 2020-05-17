const crslNextBtn = document.querySelector('.crslnext');
        const crslPrevBtn = document.querySelector('.crslprev');
        const crslAllImgs = document.querySelector('.crslallimgctn');
        const crslImgs = document.querySelectorAll('.LiveVideos__crslimg___Qwm9f');
        const crslImgsLength = document.querySelectorAll('.crslimg').length;
        let nextCount = 0;

        console.log(crslImgs)

        crslImgs[nextCount+1].style.transform = "scale(1.2)";

        function crslPrevImg() {
            nextCount -= 1;
            if (nextCount < -1) {
                nextCount = crslImgsLength - 2;
            }
            crslAllImgs.style.transform = `translateX(${nextCount*50*-1}vw)`;
            if (nextCount > -1) crslImgs[nextCount].style.transform = "scale(1)";
            crslImgs[nextCount+1].style.transform = "scale(1.2)";
            if (nextCount < crslImgsLength - 1) crslImgs[nextCount + 2].style.transform = "scale(1)";
        }
        function crslNextImg() {
            console.log("hiiiiiiiii")
            nextCount += 1;
            if (nextCount > crslImgsLength - 2) {
                nextCount = -1;
            }

            crslAllImgs.style.transform = `translateX(${nextCount*50*-1}vw)`;
            if (nextCount > -1) crslImgs[nextCount].style.transform = "scale(1)";
            crslImgs[nextCount+1].style.transform = "scale(1.2)";
            if (nextCount < crslImgsLength - 1) crslImgs[nextCount + 2].style.transform = "scale(1)";
        }
        crslPrevBtn.addEventListener('click', crslPrevImg);
        crslNextBtn.addEventListener('click', crslNextImg);

