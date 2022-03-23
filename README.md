# speak-bear
The bears speak like characters in an RPG.
The bears will also perform personality test.

## **Caution**

The personality test is very bullshit.
The questions and answers are made up by the author's imagination.
Also, even if the questions are answered in the same way, a different answer is output each time.

性格診断テストは非常にデタラメです。
質問と答えは作者の思いつきで作成したものです。
また、質問に同じように答えても毎回違う回答が出力されます。


# Installation
Run the following command.
```
npm install -g speak-bear
```

# Usage
```
Usage: speak-bear

Options:
  -V, --version  output the version number
  -q             start personality test
  -j             change Japanese
  -h, --help     display help for command

```

## speak bear
![speak](https://user-images.githubusercontent.com/64620506/159499894-525b4f2d-7ea6-49f0-9970-c38cacb7af4c.gif)
1. Run the following command.
```
speak-bear
```

2. Enter the text you want the bear to speak.

3. The bear speaks.


## personality test
![test](https://user-images.githubusercontent.com/64620506/159504628-309e6ba2-75b5-48d5-9c9c-f3cbe6779c4d.gif)
1. Run the following command.
```
speak-bear -q
```

2. Select an answer to the question

3. The bears say what your character is.

4. You can test again.

## change japanese
日本語にも対応しています。
以下のように`-j`オプションをつけて実行してください。
```
speak-bear -j
```
or
```
speak-bear -q -j
```
