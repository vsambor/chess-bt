export default {
  getMateIn2 () {
    // fetch('http://wtharvey.com/m8n2.txt', { method: 'GET', mode: 'no-cors' }).then(
    //   function (response) {
    //     if (response.status !== 200) {
    //       console.log('Looks like there was a problem. Status Code: ' + response.status)
    //       return
    //     }

    //     // Examine the text in the response
    //     response.json().then(function (data) {
    //       console.log(data)
    //     })
    //   }
    // ).catch(function (err) {
    //   console.log('Fetch Error :-S', err)
    // })

    const fen = `Henry Buckle vs NN, London, 1840
    r2qkb1r/pp2nppp/3p4/2pNN1B1/2BnP3/3P4/PPP2PPP/R2bK2R w KQkq - 1 0
    1. Nf6+ gxf6 2. Bxf7# 


    Louis Paulsen vs Blachy, New York, 1857
    1rb4r/pkPp3p/1b1P3n/1Q6/N3Pp2/8/P1P3PP/7K w - - 1 0
    1. Qd5+ Ka6 2. cxb8=N# 


    Paul Morphy vs Duke Isouard, Paris, 1858
    4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 1 0
    1. Qb8+ Nxb8 2. Rd8# 


    Johannes Zukertort vs Adolf Anderssen, Breslau, 1865
    r1b2k1r/ppp1bppp/8/1B1Q4/5q2/2P5/PPP2PPP/R3R1K1 w - - 1 0
    1. Qd8+ Bxd8 2. Re8# 


    Gustav Neumann vs Carl Mayet, Berlin, 1866
    5rkr/pp2Rp2/1b1p1Pb1/3P2Q1/2n3P1/2p5/P4P2/4R1K1 w - - 1 0
    1. Qxg6+ fxg6 2. Rg7# 


    Joseph Blackburne vs Martin, England, 1876
    1r1kr3/Nbppn1pp/1b6/8/6Q1/3B1P2/Pq3P1P/3RR1K1 w - - 1 0
    1. Qxd7+ Kxd7 2. Bb5# 


    Wilfried Paulsen vs Adolf Anderssen, Frankfurt, 1878
    5rk1/1p1q2bp/p2pN1p1/2pP2Bn/2P3P1/1P6/P4QKP/5R2 w - - 1 0
    1. Qxf8+ Bxf8 2. Rxf8# 


    Joseph Blackburne vs Smith, Simul, 1882
    r1nk3r/2b2ppp/p3b3/3NN3/Q2P3q/B2B4/P4PPP/4R1K1 w - - 1 0
    1. Qd7+ Bxd7 2. Nxf7# 


    Wilhelm Steinitz vs David Sands, New York, 1887
    r4br1/3b1kpp/1q1P4/1pp1RP1N/p7/6Q1/PPB3PP/2KR4 w - - 1 0
    1. Qg6+ hxg6 2. fxg6#


    Wilhelm Steinitz vs Albert Hodges, New York, 1891
    r1b2k1r/ppppq3/5N1p/4P2Q/4PP2/1B6/PP5P/n2K2R1 w - - 1 0
    1. Qxh6+ Rxh6 2. Rg8#  


    Siegbert Tarrasch vs Fiedler, Nuremberg, 1892 
    r2q1b1r/1pN1n1pp/p1n3k1/4Pb2/2BP4/8/PPP3PP/R1BQ1RK1 w - - 1 0
    1. Qg4+ Bxg4 2. Bf7# 


    Harry Pillsbury vs Lyons Rodgers, New York 1893
    3q2r1/4n2k/p1p1rBpp/PpPpPp2/1P3P1Q/2P3R1/7P/1R5K w - - 1 0
    1. Qxh6+ Kxh6 2. Rh3# 


    Siegbert Tarrasch vs Max Kurschner, Nuremberg, 1893
    r2qk2r/pb4pp/1n2Pb2/2B2Q2/p1p5/2P5/2B2PPP/RN2R1K1 w - - 1 0
    1. Qg6+ hxg6 2. Bxg6# 


    James Mason vs Georg Marco, Leipzig, 1894
    6k1/pp4p1/2p5/2bp4/8/P5Pb/1P3rrP/2BRRN1K b - - 0 1
    1... Rg1+ 2. Kxg1 Rxf1# 


    Frank Teed vs Eugene Delmar, New York, 1896
    rnbqkbn1/ppppp3/7r/6pp/3P1p2/3BP1B1/PPP2PPP/RN1QK1NR w - - 1 0
    1. Qxh5+ Rxh5 2. Bg6# 


    Wilhelm Steinitz vs Herbert Trenchard, Vienna, 1898
    r2qrb2/p1pn1Qp1/1p4Nk/4PR2/3n4/7N/P5PP/R6K w - - 1 0
    1. Ne7 Nxf5 2. Qg6# 


    James Mason vs Emanuel Lasker, London, 1899
    8/2r5/1k5p/1pp4P/8/K2P4/PR2QB2/2q5 b - - 0 1
    1... Qc3+ 2. Rb3 Ra7# 


    Aaron Nimzowitsch vs Gustav Neumann, Riga, 1899
    r1b3nr/ppqk1Bbp/2pp4/4P1B1/3n4/3P4/PPP2QPP/R4RK1 w - - 1 0
    1. Qf5+ Nxf5 2. e6# 


    Harry Pillsbury vs Samuel Tinsley, London, 1899
    3k1r1r/pb3p2/1p4p1/1B2B3/3qn3/6QP/P4RP1/2R3K1 w - - 1 0
    1. Bf6+ Qxf6 2. Qc7# 


    Ryder vs NN, Leipzig, 1899
    rn2kb1r/1pQbpppp/1p6/qp1N4/6n1/8/PPP3PP/2KR2NR w - - 1 0
    1. Qc8+ Bxc8 2. Nc7# 


    Pulitzer vs George Marco, Vienna, 1900
    r2k2nr/pp1b1Q1p/2n4b/3N4/3q4/3P4/PPP3PP/4RR1K w - - 1 0
    1. Re8+ Bxe8 2. Qc7#


    Arturo Reggio vs Georg Marco, Monte Carlo, 1902
    7k/1p4p1/p4b1p/3N3P/2p5/2rb4/PP2r3/K2R2R1 b - - 0 1
    1... Rc1+ 2. Rxc1 Bxb2# 


    Emanuel Lasker vs NN, Manchester, 1903
    r2q2nr/5p1p/p1Bp3b/1p1NkP2/3pP1p1/2PP2P1/PP5P/R1Bb1RK1 w - - 1 0
    1. Bf4+ Bxf4 2. gxf4#`

    const fens = fen.split('\n\n\n').map(fen => {
      const elements = fen.split('\n')
      return { name: elements[0].trim(), fen: elements[1].trim(), solution: elements[2].trim() }
    })

    return fens
  }
}
