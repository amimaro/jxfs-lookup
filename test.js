import test from 'ava'
import jxfsLookup from './'

let codes = [0, 1, 900, 1024]

for(let code of codes) {
  test(`jxfs-lookup query ${code}`, t => {
    console.log(`start ${code}=>`, Date.now())
    t.plan(1)
    return jxfsLookup.query(code)
        .then(
            res => {
                console.log(`${code} - result length: ${res.length}`)
                console.log(`end ${code}=>`, Date.now())
                t.pass();
            }
        )
        .catch(
            err => {
                console.log(`end ${code}=>`, Date.now())
                t.fail();
            }
        );
  })
}
