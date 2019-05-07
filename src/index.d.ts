/**
 * Created by joeshao on 2019/1/14.
 */

declare module 'react-native-easemob-sexysix' {
  export interface EMMessage {
    conversationId: string
    from: string
    to: string
    messageId: string
    timestamp: number
    userName: string
    chatType: number
    direct: number
    status: number
    localTime: number
    isReadAcked: boolean
    isDeliverAcked: boolean
    isListened: boolean
    isRead: boolean
    direction: number
    body: { text: string }
    ext: EMMessageExt | null
  }

  export interface EMMessageBody {
    type: number
    text: string
  }

  export interface EMMessageExt {
    type: number
    content: string
  }

  export interface EMConversation {
    conversationId: string
    allMsgCount: number
    latestMessage: EMMessage | null
    type: number
    unreadMessagesCount: number
  }

  export const EventEmitter: {
    init: () => void
    setMessageDidReceive: (callback: (list: EMMessage[]) => void) => void
    setConversationListDidUpdate: (callback: () => void) => void
  }
  export const APNs: any
  export const ChatManager: {
    createSingleConversation: (imId: string) => Promise<EMConversation>
    getAllConversations: () => Promise<EMConversation[]>
    getConversation: (
      conversationId: string,
      type: number,
      ifCreate: boolean
    ) => Promise<EMConversation>
    sendText: (
      conversationId: string,
      chatType: number,
      text: string,
      messageExt?: EMMessageExt
    ) => Promise<EMMessage>
    loadMessages: (
      conversationId: string,
      chatType: number,
      fromId: string,
      count: number,
      searchDirection: number
    ) => Promise<EMMessage[]>
    markAllMessagesAsRead: (
      conversationId: string,
      chatType: number
    ) => Promise<void>
  }
  export const GroupManager: any
  export const Client: {
    initWithAppKey: (appKey: string, options?: any) => Promise<any>
    notifyJSDidLoad: () => Promise<any>
    login: (username: string, password: string) => Promise<any>
    logout: () => Promise<any>
  }
  export const IMConstant: {
    ChatType: { single: number; group: number }
    MessageType: {
      text: number // 文本消息
      image: number // 图片消息
      video: number // 视频消息
      location: number // 位置消息
      voice: number // 语音消息
      file: number // 文件消息
      cmd: number // CMD控制消息
    }
    MessageStatus: {
      pending: number // 发送未开始
      delivering: number // 正在发送
      succeed: number // 发送成功
      failed: number // 发送失败
    }
    MessageSearchDirection: {
      up: number // 向上加载
      down: number // 向下加载
    }
    MessageDirection: {
      send: number // 我发出去的消息
      receive: number // 我收到的消息
    }
    ConnectionState: {
      Connected: number // 已连接
      Disconnected: number // 未连接
    }
  }
}
