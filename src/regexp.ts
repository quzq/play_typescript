import _ from 'lodash'
export default () => {
  console.log("====== types ===========================");
  {
    console.log("  ==== urlパラメータ抽出");
    const pattern = ''
    const target = '/RegistCompletion/store/       011/category/      0008/mkDate/20200817/readonly/0'
    const matched = _.first(target.match(new RegExp('/store/ *\\d*/', 'g')))
    const param = !matched ? null : matched.split('/')[2]
    console.log(`"${param}"`)
  }
  {
  }


}
