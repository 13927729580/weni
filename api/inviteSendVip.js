import instance from './instance'

export function user() {
  return instance({
    url: `/addons/InviteSendVip/api/v1/user`
  })
}