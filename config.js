var host={};
host['www.zhangmani.com']='http://localhost:3000';
host['www.kunchongzhi.com']='http://localhost:3001';
host['www.gongls.com']='http://localhost:3002';
host['www.bitchwho.com']='http://localhost:3005';
host['www.snailpi.com']='http://localhost:3006';
host['127.0.0.1']='http://www.zhangmani.com';
host['www.nickvpn.com']='http://www.twitter.com';
exports.host=function(viewhost){
  var h=host[viewhost];
  if(h===undefined){
    h='http://localhost:3005';
  }
  return h;
}
