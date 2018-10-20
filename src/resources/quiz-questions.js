const quizQuestions = [
  [
    {
      "questionId": 1,
      "question": "以下哪一雙鞋子比較適合野外調<span class='source-han'>查</span>？",
      "answerDescription": "雨鞋可以防水、防滑、防蛇咬，適合進行野外調<span class='source-han'>查</span>。",
      "answers": [
        {
          "isCorrect": true,
          "content": "雨鞋"
        },
        {
          "isCorrect": false,
          "content": "涼鞋"
        },
        {
          "isCorrect": false,
          "content": "拖鞋"
        }
      ],
      "illustrationIndex": 2
    },
    {
      "questionId": 2,
      "question": "「掉落式陷阱」是利用動物的哪種特性？",
      "answerDescription": "利用某些動物會沿牆角或邊緣行走的「趨觸性」特性。",
      "answers": [
        {
          "isCorrect": true,
          "content": "趨觸性"
        },
        {
          "isCorrect": false,
          "content": "趨光性"
        },
        {
          "isCorrect": false,
          "content": "親水性"
        }
      ],
      "illustrationIndex": 4
    },
    {
      "questionId": 3,
      "question": "為什麼「豎琴網」能<span class='source-han'>夠</span>捕捉到蝙蝠？",
      "answerDescription": "利用不會反射聲波的魚線網構造，成功捕捉蝙蝠進行研究。",
      "answers": [
        {
          "isCorrect": true,
          "content": "不會\n反射聲波"
        },
        {
          "isCorrect": false,
          "content": "聲音像豎琴"
        },
        {
          "isCorrect": false,
          "content": "體積很小"
        }
      ],
      "illustrationIndex": 5
    },
    {
      "questionId": 4,
      "question": "適合在山上24小時觀察動物的道具是？",
      "answerDescription": "通常架設在動物的活動路線與水源區，進行24小時監測。",
      "answers": [
        {
          "isCorrect": true,
          "content": "自動照相機"
        },
        {
          "isCorrect": false,
          "content": "豎琴網"
        },
        {
          "isCorrect": false,
          "content": "鳥類腳環"
        }
      ],
      "illustrationIndex": 1
    },
    {
      "questionId": 5,
      "question": "用來觀察小青蛙的標記道具名字是？",
      "answerDescription": "將螢光無毒染劑注入蛙類後腿皮下進行標記觀察。",
      "answers": [
        {
          "isCorrect": true,
          "content": "螢光標記"
        },
        {
          "isCorrect": false,
          "content": "腳環"
        },
        {
          "isCorrect": false,
          "content": "天線與\n發報器"
        }
      ],
      "illustrationIndex": 3
    }
  ],
  [
    {
      "questionId": 6,
      "question": "「鳥類腳環」會固定在鳥類的哪裡？",
      "answerDescription": "綁在羽毛最少的腳部，很容易觀察，也不會影響鳥類飛行。",
      "answers": [
        {
          "isCorrect": true,
          "content": "腳上"
        },
        {
          "isCorrect": false,
          "content": "脖子上"
        },
        {
          "isCorrect": false,
          "content": "翅膀上"
        }
      ],
      "illustrationIndex": 2
    },
    {
      "questionId": 7,
      "question": "移動蛇類時比較不會傷害蛇類的道具是？",
      "answerDescription": "蛇身的重心能攀在蛇勾上，對蛇類比較沒有傷害性。",
      "answers": [
        {
          "isCorrect": true,
          "content": "蛇勾"
        },
        {
          "isCorrect": false,
          "content": "蛇夾"
        },
        {
          "isCorrect": false,
          "content": "蛇板"
        }
      ],
      "illustrationIndex": 4
    },
    {
      "questionId": 8,
      "question": "「天線與發報器」在野外調<span class='source-han'>查</span>時是用來？",
      "answerDescription": "天線與發報器能用來搜尋追蹤之前野放的動物是否在附近。",
      "answers": [
        {
          "isCorrect": true,
          "content": "追蹤\n動物位置"
        },
        {
          "isCorrect": false,
          "content": "打電話"
        },
        {
          "isCorrect": false,
          "content": "測量風向"
        }
      ],
      "illustrationIndex": 1
    },
    {
      "questionId": 9,
      "question": "哪個痕跡可以用來觀察與追蹤野生動物？",
      "answerDescription": "熟悉生物知識，就能透過蛛絲馬跡推理出動物的相關資訊。",
      "answers": [
        {
          "isCorrect": true,
          "content": "兩者皆對"
        },
        {
          "isCorrect": false,
          "content": "腳印"
        },
        {
          "isCorrect": false,
          "content": "排遺（糞便）"
        }
      ],
      "illustrationIndex": 5
    },
    {
      "questionId": 10,
      "question": "輕巧可折疊，適合捕捉小動物的道具是？",
      "answerDescription": "常用於小型哺乳動物的調<span class='source-han'>查</span>道具，可折疊縮小體積。",
      "answers": [
        {
          "isCorrect": true,
          "content": "薛曼氏\n捕鼠籠"
        },
        {
          "isCorrect": false,
          "content": "豎琴網"
        },
        {
          "isCorrect": false,
          "content": "蛇勾"
        }
      ],
      "illustrationIndex": 3
    }
  ],
  [
    {
      "questionId": 11,
      "question": "在野外遇到蛇類，應該怎麼做才對呢？",
      "answerDescription": "遇到蛇應該：1.保持安靜 2.避免大動作 3.面向蛇慢慢退後離開。",
      "answers": [
        {
          "isCorrect": true,
          "content": "兩者皆對"
        },
        {
          "isCorrect": false,
          "content": "保持安靜"
        },
        {
          "isCorrect": false,
          "content": "慢慢\n後退離開"
        }
      ],
      "illustrationIndex": 4
    },
    {
      "questionId": 12,
      "question": "用「鳥類腳環」標記鳥類的好處是？",
      "answerDescription": "腳環會綁在羽毛最少的腳部，很容易觀察，也不影響鳥類飛行。",
      "answers": [
        {
          "isCorrect": true,
          "content": "不影響\n鳥類飛行"
        },
        {
          "isCorrect": false,
          "content": "不會\n反射聲波"
        },
        {
          "isCorrect": false,
          "content": "能發出聲音"
        }
      ],
      "illustrationIndex": 2
    },
    {
      "questionId": 13,
      "question": "「豎琴網」是用來捕捉哪種動物的道具？",
      "answerDescription": "利用不會反射聲波的魚線網構造，捕捉蝙蝠進行研究。",
      "answers": [
        {
          "isCorrect": true,
          "content": "蝙蝠"
        },
        {
          "isCorrect": false,
          "content": "黑冠麻鷺"
        },
        {
          "isCorrect": false,
          "content": "烏龜"
        }
      ],
      "illustrationIndex": 5
    },
    {
      "questionId": 14,
      "question": "能判斷野生動物有沒有在附近的道具是？",
      "answerDescription": "天線與發報器能用來搜尋追蹤之前野放的動物是否在附近。",
      "answers": [
        {
          "isCorrect": true,
          "content": "天線與\n發報器"
        },
        {
          "isCorrect": false,
          "content": "螢光標記"
        },
        {
          "isCorrect": false,
          "content": "鳥類腳環"
        }
      ],
      "illustrationIndex": 1
    },
    {
      "questionId": 15,
      "question": "蛙類的哪個部位適合做「螢光標記」？",
      "answerDescription": "在後腿標記比較不會影響身體臟器，且面積較大容易觀察。",
      "answers": [
        {
          "isCorrect": true,
          "content": "後腿"
        },
        {
          "isCorrect": false,
          "content": "頭頂"
        },
        {
          "isCorrect": false,
          "content": "背部"
        }
      ],
      "illustrationIndex": 3
    }
  ]
];

export default quizQuestions;