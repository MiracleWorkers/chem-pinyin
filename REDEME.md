> 本安装包仅公司内部使用，源码部分参考`chinese-to-pinyin`库，但在开发过程出现引入仓库在IE浏览器挂掉的问题，所以重新对代码进行rollup打包操作, 也特别感谢@zhujun24为我们的开发提供便利

## 安装
```bash
npm install chem-pinyin --save
```

## 使用
```js
// 引入
import chemPinyin from "chem-pinyin";

// 普通引用
chemPinyin("今天天气真好");   //  jīn tiān tiān qì zhēn hǎo

// 多音字
chemPinyin("蚌埠六安哪吒都灵") // bèng bù lù ān né zhā dū líng

// 去声调
chemPinyin('今天天气真好', {removeTone: true}) // jin tian tian qi zhen hao

// 声调转数字
chemPinyin('今天天气真好', {toneToNumber: true}) // jin1 tian1 tian1 qi4 zhen1 hao3

// 仅数字声调
chemPinyin('今天天气真好', {toneToNumberOnly: true}) // 1 1 1 4 1 3

// 去空格
chemPinyin('今天天气真好', {removeSpace: true}) // jīntiāntiānqìzhēnhǎo

// 保留未转换部分
chemPinyin('1今天天气dd', { keepRest: true }) // 1jīn tiān tiān qìdd

// 首字母
chemPinyin('今天天气真好', { firstCharacter: true }) // j t t q z h

// 首字母 - 保留未转换部分
pinyin('1今2天3天4气5真6好', { keepRest: true, firstCharacter: true }) // 1j2t3t4q5z6h
```

## options
| 配置               | 说明      |
|------------------|---------|
| removeTone       | 去声调     |
| removeSpace      | 去空格     |
| toneToNumber     | 声调转成数字  |
| toneToNumberOnly | 仅输出声调  |
| keepRest         | 保留未转换部分 |
| firstCharacter   | 仅获取首字母  |
