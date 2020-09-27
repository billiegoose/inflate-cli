# inflate-cli
A CLI utility for inflating streams compressed with `deflate` algorithm

## Install

```sh
npm i -g inflate-cli
```

(Note: the bin is named `inflate` not `inflate-cli`.)

## Use

You can either pipe the file (preferred) or specify the file name as a command line argument.

```sh
cat somefile.Z | inflate
```

or

```sh
inflate somefile.Z
```
