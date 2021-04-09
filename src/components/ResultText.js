import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
import GeneratorContext from '../GeneratorContext'

const ResultText = () => {
  const { dataObj, GeneratorDataScheme } = useContext( GeneratorContext )
  const displayDataObj = {}
  GeneratorDataScheme.forEach(scheme => {
    displayDataObj[scheme.title] = dataObj[scheme.title] || "["+scheme.default+"]"
  })
  const classes = useStyles()
  return (
    <div id="result" className={classes.container}>
      <p className="c8 c9 title" id="h.utxiyomolk6w"><span className="c11">{displayDataObj["你的小隊"]}</span><span className="c7 c1 c6">憲章</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">版本︰{displayDataObj["版本"]}</span></p>
      <h1 className="c8 c9" id="h.o6np6d72bz0p"><span className="c7 c6 c4">第一節︰一般情況</span></h1>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第1條︰名稱</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">本組織的名稱應為「</span><span className="c1 c6">{displayDataObj["你的小隊"]}</span><span className="c5 c4">」。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第2條︰性質和範圍</span></p>
      <p className="c2"><span className="c4">一、</span><span className="c1 c6">{displayDataObj["你的小隊"]}</span><span className="c5 c4">是一個新聯合主義運動。</span></p>
      <p className="c2"><span className="c4">二、</span><span className="c1 c6">{displayDataObj["你的小隊"]} 有否從屬其他團體</span><span className="c5 c4">&nbsp;</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c5 c4">第3條︰目標</span></p>
      <p className="c2"><span className="c1">&nbsp;目標</span></p>
      {
        displayDataObj["目標"].split("\n").map(v => {
          return (
            <p key={"output-"+v} className="c2"><span className="c4">{v}</span></p>
          )
        })
      }
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c5 c4">&nbsp; </span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <h1 className="c8 c9" id="h.l2f166kp7m8q"><span>第二節︰</span><span className="c11">{displayDataObj["你的成員"]}</span><span className="c7 c6 c4">資格</span></h1>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">第1條</span><span className="c1 c6">{displayDataObj["你的成員"]}</span><span className="c5 c4">資格</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">一、會籍</span></p>
      <p className="c2"><span className="c4">任何認同</span><span className="c1 c6">{displayDataObj["你的小隊"]}</span><span className="c4">之理念的人，由</span><span className="c1 c6">{displayDataObj["你的小隊][你的成員"]}</span><span className="c4">推薦並支付規定的</span><span className="c1 c6">{displayDataObj["你的成員"]}</span><span className="c4">奉獻後即成為</span><span className="c1 c6">{displayDataObj["你的小隊][你的成員"]}</span><span className="c5 c4">。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第2條︰權利</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">一、</span><span className="c1 c6">{displayDataObj["你的小隊"]}</span><span className="c5 c4">的所有成員都享有以下特權：</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">I。使用</span><span className="c1 c6">{displayDataObj["你的小隊"]}</span><span className="c5 c4">提供的所有設施;</span></p>
      <p className="c2"><span className="c4">II。參加</span><span className="c1 c6">{displayDataObj["你的小隊][大會名稱"]}</span><span className="c4">及</span><span className="c1 c6">{displayDataObj["臨時會名稱"]}</span><span className="c5 c4">；和</span></p>
      <p className="c2"><span className="c4">III。參加</span><span className="c1 c6">{displayDataObj["你的小隊"]}</span><span className="c5 c4">安排的活動。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">二、{displayDataObj["你的小隊"]}的所有成員均有權被提名參加選舉並有資格在</span><span className="c1 c6">{displayDataObj["你的小隊][領導層名稱"]}</span><span className="c4">任職，</span><span className="c1 c6">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">的組成應根據本憲章第三節選出。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">三、</span><span className="c1 c6">{displayDataObj["你的小隊"]}</span><span className="c4">的所有成員均有權在大會上投票並在</span><span className="c1 c6">{displayDataObj["你的小隊][領導層名稱"]}</span><span className="c5 c4">中提名。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">四、所有成員都有權審核新的</span><span className="c1 c6">{displayDataObj["你的成員"]}</span><span className="c5 c4">申請。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第3條︰職責</span></p>
      <p className="c2"><span className="c4">1.</span><span className="c1">{displayDataObj["你的成員"]}</span><span className="c5 c4">應遵守憲章和{displayDataObj["你的小隊"]}的決議。</span></p>
      <p className="c2"><span className="c4">2.</span><span className="c1">{displayDataObj["你的成員"]}</span><span className="c4">必須支付</span><span className="c1">{displayDataObj["你的成員"]}</span><span className="c5 c4">奉獻。</span></p>
      <p className="c2"><span className="c4">3</span><span className="c1">.{displayDataObj["你的成員"]}</span><span className="c5 c4">應認同{displayDataObj["你的小隊"]}的目標。</span></p>
      <p className="c2"><span className="c4">4.當</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">授權評估和批准新的</span><span className="c1">{displayDataObj["你的成員"]}</span><span className="c4">申請人時，</span><span className="c1">{displayDataObj["你的成員"]}</span><span className="c5 c4">應該花時間和精力向申請人進行面試並將決定回報給{displayDataObj["領導層名稱"]}。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">第三節︰</span><span className="c0">{displayDataObj["領導層名稱"]}</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">第1條︰</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">的組成</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">一、</span><span className="c1">{displayDataObj["你的小隊][領導層名稱"]}</span><span className="c5 c4">由以下人員組成：</span></p>
      <p className="c2"><span className="c4">I。</span><span className="c1">{displayDataObj["主席"]}</span><span className="c5 c4">;</span></p>
      <p className="c2"><span className="c5 c4">II。Admin1;</span></p>
      <p className="c2"><span className="c5 c4">III。Admin2;</span></p>
      <p className="c2"><span className="c4">IV。</span><span className="c0">{displayDataObj["副主席"]}</span></p>
      <p className="c2"><span className="c5 c4">V。0到4個其他成員。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第2條︰選舉和增選成員</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">一、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">的</span><span className="c1">{displayDataObj["主席"]}</span><span className="c5 c4">應按照第五節的規定選出。</span></p>
      <p className="c2"><span className="c4">二、根據第五節選出的[</span><span className="c1">主席]</span><span className="c4">在其任期內有權委任Admin1, Admin2, </span><span className="c1">{displayDataObj["副主席"]}</span><span className="c4">以及不超過4名其他成員，他們必須是</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c5 c4">的成員。</span></p>
      <p className="c2"><span className="c4">三、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">當選成員的任期應根據本協議第五節第1條的規定到期。</span></p>
      <p className="c2"><span className="c4">四、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">增選成員的任期應在該成員被選中的開放文化站屆滿時屆滿。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c5 c4">第3條︰{displayDataObj["領導層名稱"]}的職能</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">一、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">應對與</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c5 c4">所有事項有權指導和控制。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">二、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">應促進實現</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c5 c4">站的目標。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第4條︰{displayDataObj["領導層名稱"]}的權力</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">一、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">有權委任</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c5 c4">的任何成員為任何特定目的成立任何小組委員會。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">二、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">有權邀請任何人參加[</span><span className="c1">你的小隊]</span><span className="c5 c4">的任何會議或活動。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">三、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">應決定</span><span className="c1">{displayDataObj["你的成員"]}</span><span className="c5 c4">奉獻。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">四、[</span><span className="c1">領導層名稱]</span><span className="c5 c4">有權委任顧問。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">五、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">在此處第四節第1條的主題下，有權制定，修改或廢除章程。根據本條規定制定的附例，自章程提案通知</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c5 c4">站所有成員之日起4天后才生效。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c8"><span className="c4">第四節︰</span><span className="c1">{displayDataObj["你的成員"]}</span><span className="c5 c4">大會</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第1條︰權力</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">一、根據本憲章第七節第1條的規定，</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c4">的</span><span className="c1">{displayDataObj["你的成員"]}</span><span className="c4">大會決議應為影響</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c5 c4">的所有事項中擁有最高權力。</span></p>
      <p className="c2"><span className="c4">二、</span><span className="c1">{displayDataObj["你的成員"]}</span><span className="c5 c4">大會包含{displayDataObj["大會]和[臨時大會"]}。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4 c5">第2條︰法定人數</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">在</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c4">的所有</span><span className="c1">{displayDataObj["你的成員"]}</span><span className="c4">大會上，要麼是</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c4">所有成員的十分之一，或是</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c5 c4">的至少20名成員，兩項中為數較少者即構成法定人數。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">第3條︰</span><span className="c0">{displayDataObj["大會"]}</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">一、</span><span className="c1">{displayDataObj["大會"]}</span><span className="c4">由</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">每24個月召開一次，不少於30個月一次。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">二、</span><span className="c1">{displayDataObj["大會"]}</span><span className="c5 c4">不得少於7天通知。</span></p>
      <p className="c2"><span className="c4">三、</span><span className="c1">{displayDataObj["大會"]}</span><span className="c5 c4">的事務為：</span></p>
      <p className="c2"><span className="c4">I。接收和通過可能在會議期間舉行的上次[</span><span className="c1">大會]</span><span className="c4">和所有</span><span className="c1">{displayDataObj["臨時大會"]}</span><span className="c5 c4">的會議記錄;</span></p>
      <p className="c2"><span className="c4">II。接收和通過</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">的年度報告;</span></p>
      <p className="c2"><span className="c4">III。選舉</span><span className="c1">[領導層名稱</span><span className="c5 c4">]參加下屆會議;</span></p>
      <p className="c2"><span className="c5 c4">IV。任命義務法律顧問；</span></p>
      <p className="c2"><span className="c5 c4">v。處理任何其他事務。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">第4條︰</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c5 c4">的會議</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c4">的任何後續會議應在上屆</span><span className="c1">{displayDataObj["大會"]}</span><span className="c4">結束時開始，並在下一屆</span><span className="c1">{displayDataObj["大會"]}</span><span className="c5 c4">結束時結束。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">第5條︰</span><span className="c0">{displayDataObj["臨時大會"]}</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">一、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">有權隨時因任何目的而召開</span><span className="c1">{displayDataObj["臨時大會"]}</span><span className="c5 c4">。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">二、由不少於二十分之一的</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c4">成員聯署請求，</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">應召開</span><span className="c1">{displayDataObj["臨時大會"]}</span><span className="c5 c4">。該聯署應規定擬議的事項。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">三、不少於2日通知，說明</span><span className="c1">{displayDataObj["臨時大會"]}</span><span className="c5 c4">的目標。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c8"><span className="c7 c6 c4">第五節︰選舉</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c5 c4">第1條︰任期</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">&nbsp;一、在每次</span><span className="c1">{displayDataObj["大會"]}</span><span className="c4">上，</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">的所有當選成員均應卸任。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">二、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">的卸任成員有資格再次當選。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">三、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">的任何成員可以通過向主席發出不少於一個月的通知而辭職。在</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">成員辭職後</span><span className="c1">，{displayDataObj["領導層名稱"]}</span><span className="c4">其餘成員有權選擇</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c5 c4">的任何成員填補辭職成員的職位。該增選成員的任期以辭職成員的餘下任期為準。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第二條︰提名</span></p>
      <p className="c2"><span className="c4">一、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">應在一日前任命一個選舉委員會，由</span><span className="c1">{displayDataObj["主席"]}</span><span className="c4">和[</span><span className="c1">副主席</span><span className="c5 c4">]組成，以處理選舉事宜。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">二、下屆會議</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c4">站</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">成員的提名可在營火大會前一小時提交予</span><span className="c1">[副主席</span><span className="c5 c4">]。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">三、每位候選人應由提名人及和議人提名，兩人均必須是</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c5 c4">的成員。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第3條︰表決方法</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">一、有兩輪選舉。第一輪以不記名投票方式選出3名候選人。第二輪是</span><span className="c1">{displayDataObj["主席"]}</span><span className="c5 c4">的抽籤。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c5 c4">二、如果正好有3名候選人，那麼他們應該進入抽籤環節。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">三、當有超過3名候選人時，出席</span><span className="c1">{displayDataObj["大會"]}</span><span className="c5 c4">的每位成員可以通過不記名投票方式投票選出3名候選人，3名票數最高的候選人將進入抽籤環節。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">第4條︰</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">的組成</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">一、在</span><span className="c1">{displayDataObj["大會"]}</span><span className="c4">選出3名成員後，立即進行抽籤，所選出的候選人將成為下屆</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c4">的</span><span className="c1">{displayDataObj["主席"]}</span><span className="c5 c4">。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">二、選出的</span><span className="c1">{displayDataObj["主席"]}</span><span className="c4">應經</span><span className="c1">{displayDataObj["大會"]}</span><span className="c5 c4">批准。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">三、如果</span><span className="c1">{displayDataObj["主席"]}</span><span className="c4">未能通過</span><span className="c1">{displayDataObj["大會"]}</span><span className="c4">批准，</span><span className="c1">{displayDataObj["大會"]}</span><span className="c5 c4">應重啟選舉流程，由提名程序開始。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">五、</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">的其他職位應由</span><span className="c1">{displayDataObj["主席"]}</span><span className="c5 c4">委任。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c8"><span className="c7 c6 c4">第六節︰憲章</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第1條︰解釋</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c4">[</span><span className="c1">領導層名稱]</span><span className="c5 c4">對本憲章的解釋擁有最終權力。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第2條︰修正案</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">除非在</span><span className="c1">{displayDataObj["你的成員"]}</span><span className="c4">大會上，否則不得對本章程進行修改。除非並且直到獲得[</span><span className="c1">領導層名稱]</span><span className="c5 c4">的批准，否則任何此類修改均不得生效。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第3條︰辭職</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">成員的辭職應由</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">通過，方為有效。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c5 c4">第4條︰空缺</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">一、如果</span><span className="c1">{displayDataObj["主席"]}</span><span className="c5 c4">位置懸空，Admin1應該替換佢。</span></p>
      <p className="c2"><span className="c4">二、如果</span><span className="c1">{displayDataObj["主席"]}</span><span className="c5 c4">和Admin1都空缺，Admin2應該替換佢。</span></p>
      <p className="c2"><span className="c4">三、如果任何其他</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">成員空缺，</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">應重選適當的成員接替其席位，並得</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">三分之二以上成員的同意才能生效。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c8"><span className="c6 c4 c7">第七節︰其他</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第1條︰處罰</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">一、被發現違反憲章的</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">成員將立即失去其作為成員的權利。</span></p>
      <p className="c2"><span className="c4">二、如果</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">成員違反憲章或忽視其職責，</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">可以通過</span><span className="c1">[領導層名稱</span><span className="c5 c4">]三分之二成員的肯定投票來彈劾或徹回他或她的職位。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第2條︰憲章修正案</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">一、如果所有成員的五分之一或以上聯署，或經半數</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">成員同意，則可以修改憲章。</span></p>
      <p className="c2"><span className="c4">二、憲章修正案應由</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">任命的修憲委員會進行。</span></p>
      <p className="c2"><span className="c4">三、如果修正案的草案經</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">審查並在大會上通過，其中贊成票的數量多於反對票數，且超過有效票數，則可修改憲章。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c4">第3條︰臨時</span><span className="c0">{displayDataObj["領導層名稱"]}</span></p>
      <p className="c2"><span className="c4">一、權力：在</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">空缺時維持[</span><span className="c1">你的小隊]</span><span className="c4">的基本運作和外部聯繫。其任期應該持續到新的</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">任職為止。</span></p>
      <p className="c2"><span className="c4">二、結構：臨時</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c4">的成員應由</span><span className="c1">{displayDataObj["主席"]}</span><span className="c4">，</span><span className="c1">{displayDataObj["副主席"]}</span><span className="c5 c4">，Admin1和Admin2組成。</span></p>
      <p className="c2"><span className="c4">三、臨時</span><span className="c1">{displayDataObj["領導層名稱"]}</span><span className="c5 c4">應在離職後一個月內向下屆委員會提交工作報告和財務報告。</span></p>
      <p className="c2"><span className="c5 c4">&nbsp;</span></p>
      <p className="c2"><span className="c5 c4">第4條︰憲章之間的不一致</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c2"><span className="c4">如果中文憲法與</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c5 c4">英文憲章之間存在任何不一致之處，則應以中文憲章為準。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
      <p className="c8"><span className="c6 c4">第八節︰</span><span className="c1 c6">{displayDataObj["你的小隊"]}</span><span className="c7 c6 c4">之解散</span></p>
      <p className="c8 c3"><span className="c7 c6 c4"></span></p>
      <p className="c2"><span className="c4">在</span><span className="c1">{displayDataObj["大會"]}</span><span className="c4">或[</span><span className="c1">臨時大會]</span><span className="c4">上可以解散。</span><span className="c1">{displayDataObj["你的小隊"]}</span><span className="c4">的資產應按</span><span className="c1">{displayDataObj["你的成員"]}</span><span className="c5 c4">大會的決定捐贈給其他支持新聯合運動的組織。</span></p>
      <p className="c2 c3"><span className="c5 c4"></span></p>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  container:{
    height: "70vh",
    "& ol": { margin: "0", padding: "0" },
    "& table td, table th": { padding: "0" },
    "& .c0": {
      backgroundColor: "#ffff00",
      color: "#000000",
      fontWeight: 400,
      textDecoration: "none",
      verticalAlign: "baseline",
      fontSize: "10pt",
      fontFamily: '"Arial"',
      fontStyle: "normal"
    },
    "& .c2": {
      paddingTop: "0pt",
      paddingBottom: "0pt",
      lineHeight: 1.15,
      orphans: 2,
      widows: 2,
      textAlign: "left"
    },
    "& .c8": {
      paddingTop: "0pt",
      paddingBottom: "0pt",
      lineHeight: 1.15,
      orphans: 2,
      widows: 2,
      textAlign: "center"
    },
    "& .c5": {
      color: "#000000",
      fontWeight: 400,
      textDecoration: "none",
      verticalAlign: "baseline",
      fontFamily: '"Arial"',
      fontStyle: "normal"
    },
    "& .c7": {
      color: "#000000",
      textDecoration: "none",
      verticalAlign: "baseline",
      fontFamily: '"Arial"',
      fontStyle: "normal"
    },
    "& .c10": {
      backgroundColor: "#ffffff",
      maxWidth: "468pt",
      padding: "72pt 72pt 72pt 72pt"
    },
    "& .c1": { backgroundColor: "#ffff00", fontSize: "10pt" },
    "& .c12": { backgroundColor: "#ff0000", color: "#00ff00" },
    "& .c6": { fontWeight: 700 },
    "& .c3": { height: "11pt" },
    "& .c11": { backgroundColor: "#ffff00" },
    "& .c9": { pageBreakAfter: "avoid" },
    "& .c4": { fontSize: "10pt" },
    "& .c13": { backgroundColor: "#ff0000" },
    "& .title": {
      backgroundColor: "#ffff00",
      paddingTop: "0pt",
      color: "#000000",
      fontWeight: 700,
      fontSize: "10pt",
      paddingBottom: "0pt",
      fontFamily: '"Arial"',
      lineHeight: 1.15,
      pageBreakAfter: "avoid",
      orphans: 2,
      widows: 2,
      textAlign: "center"
    },
    "& .subtitle": {
      paddingTop: "0pt",
      color: "#666666",
      fontSize: "15pt",
      paddingBottom: "16pt",
      fontFamily: '"Arial"',
      lineHeight: 1.15,
      pageBreakAfter: "avoid",
      orphans: 2,
      widows: 2,
      textAlign: "left"
    },
    "& li": { color: "#000000", fontSize: "11pt", fontFamily: '"Arial"' },
    "& p": { margin: "0", color: "#000000", fontSize: "11pt", fontFamily: '"Arial"' },
    "& h1": {
      paddingTop: "0pt",
      color: "#000000",
      fontWeight: 700,
      fontSize: "10pt",
      paddingBottom: "0pt",
      fontFamily: '"Arial"',
      lineHeight: 1.15,
      pageBreakAfter: "avoid",
      orphans: 2,
      widows: 2,
      textAlign: "center"
    },
    "& h2": {
      paddingTop: "18pt",
      color: "#000000",
      fontSize: "16pt",
      paddingBottom: "6pt",
      fontFamily: '"Arial"',
      lineHeight: 1.15,
      pageBreakAfter: "avoid",
      orphans: 2,
      widows: 2,
      textAlign: "left"
    },
    "& h3": {
      paddingTop: "16pt",
      color: "#434343",
      fontSize: "14pt",
      paddingBottom: "4pt",
      fontFamily: '"Arial"',
      lineHeight: 1.15,
      pageBreakAfter: "avoid",
      orphans: 2,
      widows: 2,
      textAlign: "left"
    },
    "& h4": {
      paddingTop: "14pt",
      color: "#666666",
      fontSize: "12pt",
      paddingBottom: "4pt",
      fontFamily: '"Arial"',
      lineHeight: 1.15,
      pageBreakAfter: "avoid",
      orphans: 2,
      widows: 2,
      textAlign: "left"
    },
    "& h5": {
      paddingTop: "12pt",
      color: "#666666",
      fontSize: "11pt",
      paddingBottom: "4pt",
      fontFamily: '"Arial"',
      lineHeight: 1.15,
      pageBreakAfter: "avoid",
      orphans: 2,
      widows: 2,
      textAlign: "left"
    },
    "& h6": {
      paddingTop: "12pt",
      color: "#666666",
      fontSize: "11pt",
      paddingBottom: "4pt",
      fontFamily: '"Arial"',
      lineHeight: 1.15,
      pageBreakAfter: "avoid",
      fontStyle: "italic",
      orphans: 2,
      widows: 2,
      textAlign: "left"
    }
  }
}))

export default ResultText