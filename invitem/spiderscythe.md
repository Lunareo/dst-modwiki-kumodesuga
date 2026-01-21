<item-header 
    img="images/inventoryimages/spiderscythe.png" 
    title="阿剌克涅" 
    tags="物品, 装备, 武器">

---

> 代码名 `spiderscythe`

##### 介绍
阿剌克涅是一件只能由[白织](/charactor/shiro.md)或者[若叶姬色](/charactor/wakaba.md)制作的武器. 

##### 基本
手持, 近战武器 \
攻击距离+1, 34通常攻击+17腐蚀伤害 \
200次使用

###### 效果
- 攻击时, 会对目标施加[腐蚀Debuff](/generic/buff_erosion.md).
- 击杀目标时, 会基于目标的最大生命值, 恢复阿剌克涅的部分耐久.
- 每次攻击消耗少量<hunger-badge>, 并恢复少量<health-badge>.
- 当[白织](/charactor/shiro.md)或者[若叶姬色](/charactor/wakaba.md)装备时, 可以右键释放半径为4墙体的范围攻击: 对范围内的可攻击目标造成伤害, 并消耗攻击目标数+1的耐久, 冷却时间3秒.
- 当[白织](/charactor/shiro.md)或者[若叶姬色](/charactor/wakaba.md)以外的角色装备时, 会以0.5/s的速度流失<health-badge>.

##### 获取
<ingredient img="decrease_health" name="生命值" num="100">
<ingredient img="shiro" type="charactor" ismod="1">
<right-arrow>
<ingredient img="spiderscythe" ismod="1"><br>
<ingredient img="decrease_health" name="生命值" num="5">
<ingredient img="livinglog" name="活木" num="2">
<ingredient img="silk" name="蜘蛛丝" num="4">
<ingredient img="wakaba" type="charactor" ismod="1">
<right-arrow>
<ingredient img="spiderscythe" ismod="1"><br>