# react-native-easemob-sexysix

forked from [RNCommon/react-native-im-easemob](https://github.com/RNCommon/react-native-im-easemob)

环信IM的原生接口React-Native封装库。

## 安装

使用Yarn安装:

```
yarn add react-native-easemob-sexysix
```

使用npm安装:

```
npm install --save react-native-easemob-sexysix
```

link:
```
react-native link react-native-easemob-sexysix
```

需要在合适的位置初始化：
```
await Client.initWithAppKey(CONFIG.easemobKey)
// 设置之后才可以设置相关监听
await EventEmitter.init()
await Client.notifyJSDidLoad()
```

[原README](https://github.com/RNCommon/react-native-im-easemob)
