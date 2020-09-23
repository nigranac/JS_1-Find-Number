var numbers = document.querySelectorAll(".num");
        for (var i = 0; i < numbers.length; i++) {
          numbers[i].addEventListener("click", function() {
            if (this.value == '.') {
              return;
            }
            document.getElementById("result").innerHTML += this.value;

            if (selectedOperator == '') {
              leftPart += this.value;
            } else if (selectedOperator != '') {
              rightPart += this.value;
            }

          }, false);
        }


        var operators = document.querySelectorAll(".operator");
        for (var i = 0; i < operators.length; i++) {
          operators[i].addEventListener("click", function() {
            if (document.getElementById("result").innerHTML === "") {
              return;
            }
            document.getElementById("result").innerHTML += this.value;

            selectedOperator = this.value;
          }, false);
        }



        document.getElementById("dot").addEventListener("click", function() {
          if (document.getElementById("result").innerHTML.indexOf('.') != -1) {
            return;
          }

          if (document.getElementById("result").innerHTML === "") {
            output = document.getElementById("result").innerHTML = '0.';
          } else if (document.getElementById("result").innerHTML === output) {
            document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + '.';
          }
        }, false);

