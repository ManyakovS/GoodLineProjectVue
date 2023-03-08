

export const mainModule = {
    state: () => ({
        appartaments: [{
            id: 1,
            name: "Лофт - 3 этажа",
            appartImg:  [[{
                        id: 1,
                        path: 'house1_bedroom',
                        isBig: true,
                        }],

                        [{
                        id: 2,
                        path: 'house1_hall',
                        isBig: false,
                        }],

                        [{
                        id: 3,
                        path: 'house1_libr',
                        isBig: false,
                        }],

                        [{
                        id: 4,
                        path: 'house1_livingroom',
                        isBig: false,
                        }],
                        [{
                            id: 5,
                            path: 'house1_2bedroom',
                            isBig: false,
                        }],

                        [{
                            id: 6,
                            path: 'house1_kitchen',
                            isBig: false,
                        }],

                        [{
                            id: 7,
                            path: 'house1_kitchen2',
                            isBig: false,
                            }],

                        [{
                            id: 8,
                            path: 'house1_office',
                            isBig: false,
                        }],

                        [{
                            id: 9,
                            path: 'house1_office2',
                            isBig: false,
                        }],

                        ],
                        
                        },
                        {
                        id: 2,
                        name: "Лофт - 2 этажа",
                        appartImg:  [[{
                            id: 1,
                            path: 'house2_bedroom',
                            isBig: true,

                            }],
                            [{
                            id: 2,
                            path: 'house2_2bedroom2',
                            isBig: false,
                            }],
                            [{
                            id: 3,
                            path: 'house2_2lbedroom',
                            isBig: false,
                            }],
                            [{
                            id: 4,
                            path: 'house2_2livingroom',
                            isBig: false,
                            }],
                            [{
                            id: 5,
                            path: 'house2_livingroom',
                            isBig: false,
                            }],
                            [{
                            id: 6,
                            path: 'house2_bathroom',
                            isBig: false,
                            }],
                            [{
                            id: 7,
                            path: 'house2_chillroom',
                            isBig: false,
                            }],
                            [{
                            id: 8,
                            path: 'house2_kitchen',
                            isBig: false,
                            }],
                            [{
                            id: 9,
                            path: 'house2_paint',
                            isBig: false,
                            }],
                            [{
                            id: 10,
                            path: 'house2_toilet',
                            isBig: false,
                            }],                           
                            
                            ],
                            },
                        {
                        id: 3,
                        name: "Лофт - 1 этаж",
                        appartImg:   [[{
                            id: 1,
                            path: 'house1_bedroom',
                            isBig: true,

                            }],

                            [{
                            id: 2,
                            path: 'house1_hall',
                            isBig: false,
                            }],

                            [{
                            id: 3,
                            path: 'house1_libr',
                            isBig: false,
                            }],

                            [{
                            id: 4,
                            path: 'house1_livingroom',
                            isBig: false,
                            }],
                            [{
                                id: 5,
                                path: 'house1_2bedroom',
                                isBig: false,
                            }],

                            [{
                                id: 6,
                                path: 'house1_kitchen',
                                isBig: false,
                            }],

                            [{
                                id: 7,
                                path: 'house1_kitchen2',
                                isBig: false,
                                }],

                            [{
                                id: 8,
                                path: 'house1_office',
                                isBig: false,
                            }],

                            [{
                                id: 9,
                                path: 'house1_office2',
                                isBig: false,
                            }],

                            ],
                        },
                        {
                        id: 4,
                        name: "Лофт - 2 этажа",
                        appartImg:   [[{
                            id: 1,
                            path: 'house1_bedroom',
                            isBig: true,

                            }],

                            [{
                            id: 2,
                            path: 'house1_hall',
                            isBig: false,
                            }],

                            [{
                            id: 3,
                            path: 'house1_libr',
                            isBig: false,
                            }],

                            [{
                            id: 4,
                            path: 'house1_livingroom',
                            isBig: false,
                            }],
                            ]
                    },],
                }),
        form: {
            name: '',
            phone: ''
        },
    getters:{
/*         sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        } */
    },
    mutations: {
         setForm(state, form) {
            state.form = form
        },
        /*
        setLoading(state, bool) {
            state.isPostLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        } */
    },
    namespaced: true
}