'use client';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { useGSAP } from '@gsap/react';
import { Button, styled, Tabs, Tab } from '@mui/material';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { useTranslation } from 'next-i18next';
import { useEffect, useLayoutEffect, useState } from 'react';

gsap.registerPlugin(Flip);


type Props = {};

const ProjectSection = ({ }: Props) => {
    const { t } = useTranslation('common');
    const [actTab, setActTab] = useState<string>('2020-2021');

    const phases = [
        {
            phase: '2020 - 2021',
            data: [
                {
                    phase: '2021',
                    items: [
                        {
                            title: t('projectPage.nhFuture'),
                            description: t('projectPage.buildNextGenerationITSystem'),
                            img: '/images/pages/projects/prj-img-mirae.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.koskom'),
                            description: t('projectPage.koskomBuildGlobalStock'),
                            img: '/images/pages/projects/prj-img-koskom.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.nhInvestmentSecurities'),
                            description: t('projectPage.nhInvestmentSecuritiesBuildGlobal'),
                            img: '/images/pages/projects/prj-img-nh-invest.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.eugeneInvestmentFuturesProject'),
                            description: t('projectPage.eugeneInvestmentFuturesCdOrder'),
                            img: '/images/pages/projects/prj-img-eugene.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.bullionBank'),
                            description: t('projectPage.buildGoldTradingSystem'),
                            img: '/images/pages/projects/prj-img-bullion.jpg',
                            link: '#'
                        }
                    ]
                },
                {
                    phase: '2020',
                    items: [
                        {
                            title: t('projectPage.miraeAssetBuild'),
                            description: t('projectPage.buildNextGenerationOms'),
                            img: '/images/pages/projects/prj-img-mirae.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.skSecurities'),
                            description: t('projectPage.buildGlobalDerivativesSystem'),
                            img: '/images/pages/projects/prj-img-sk.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.nhFuture2020'),
                            description: t('projectPage.krxElectronicMoneyTransfer'),
                            img: '/images/pages/projects/prj-img-nhfuture.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.eugeneInvestmentFutures2020'),
                            description: t('projectPage.developmentOfTradingCommunity'),
                            img: '/images/pages/projects/prj-img-eugene.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.deutscheBank'),
                            description: t('projectPage.buildGlobalDerivativesAndVccm'),
                            img: '/images/pages/projects/prj-img-deutsche.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.kbSecurities2020'),
                            description: t('projectPage.buildGlobalDerivativesSegregated'),
                            img: '/images/pages/projects/prj-img-kb-bank.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.lotteDataCommunication2020'),
                            description: t('projectPage.buildVietnamSecurities'),
                            img: '/images/pages/projects/prj-img-lotte.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.kbBank2020'),
                            description: t('projectPage.buildForeignExchange'),
                            img: '/images/pages/projects/prj-img-kb-securities.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.cy2code'),
                            description: t('projectPage.provideCmeGroup'),
                            img: '/images/pages/projects/prj-img-cy2code.jpg',
                            link: '#'
                        }
                    ]
                }
            ]
        },
        {
            phase: '2018 - 2019',
            data: [
                {
                    phase: '2019',
                    items: [
                        {
                            title: t('projectPage.lotteDataCommunication'),
                            description: t('projectPage.vietnamSecuritiesIntegration'),
                            img: '/images/pages/projects/prj-img-lotte.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.nonghyupHanaroMart'),
                            description: t('projectPage.developmentOfAccountingSystem'),
                            img: '/images/pages/projects/prj-img-nonghyup.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.meritzSecurities'),
                            description: t('projectPage.globalDerivativesSystemEstablishment'),
                            img: '/images/pages/projects/prj-img-mertz.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.kyoboSecurities'),
                            description: t('projectPage.globalOptionSystemEstablishment'),
                            img: '/images/pages/projects/prj-img-kyobo.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.kiwoomSecurities'),
                            description: t('projectPage.providePrimaSolution'),
                            img: '/images/pages/projects/prj-img-kiwoom.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.kbBank'),
                            description: t('projectPage.buildMyDealingRoomPRO'),
                            img: '/images/pages/projects/prj-img-kb-bank.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.samsungFuture'),
                            description: t('projectPage.providePrimaSolution'),
                            img: '/images/pages/projects/prj-img-samsung-future.jpg',
                            link: '#'
                        }
                    ]
                },
                {
                    phase: '2018',
                    items: [
                        {
                            title: t('projectPage.nhInformationSystem'),
                            description: t('projectPage.establishPomsRiskMessageDistribution'),
                            img: '/images/pages/projects/prj-img-nh-info-system.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.nhBank'),
                            description: t('projectPage.developmentOfMarketableSecuritiesOms'),
                            img: '/images/pages/projects/prj-img-nh-bank.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.miraeAsset'),
                            description: t('projectPage.nextGenerationSystemEstablishment'),
                            img: '/images/pages/projects/prj-img-mirae.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.kbSecurities'),
                            description: t('projectPage.developmentOfMarginFxFom'),
                            img: '/images/pages/projects/prj-img-kb-securities.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.dbFinancialInvestment'),
                            description: t('projectPage.globalSolutionSystemEstablishment'),
                            img: '/images/pages/projects/prj-img-db-financial-invest.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.lotteDataCommunication'),
                            description: t('projectPage.provideVietnamSecuritiesSolution'),
                            img: '/images/pages/projects/prj-img-lotte.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.cnando'),
                            description: t('projectPage.indonesiaSecuritiesMtsDevelopment'),
                            img: '/images/pages/projects/prj-img-cnaindo.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.nhFuture'),
                            description: t('projectPage.globalDerivativesSpreadTrading'),
                            img: '/images/pages/projects/prj-img-nhfuture.jpg',
                            link: '#'
                        }
                    ]
                }
            ]
        },
        {
            phase: '2016 - 2017',
            data: [
                {
                    phase: '2017',
                    items: [
                        {
                            title: t('projectPage.eugeneFuture'),
                            description: t('projectPage.domesticGlobalDerivativesSystemReEstablishment'),
                            img: '/images/pages/projects/prj-img-eugene-futures.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.meritzSecurities'),
                            description: t('projectPage.establishmentOfNightSessionFutureOptionSystem'),
                            img: '/images/pages/projects/prj-img-mertz.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.dbFinancialInvestment'),
                            description: t('projectPage.globalDerivativesMtsEstablishmentGlobal'),
                            img: '/images/pages/projects/prj-img-db-financial-invest.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.kbSecurities'),
                            description: t('projectPage.additionalDevelopmentOfMarginFXSystem'),
                            img: '/images/pages/projects/prj-img-kb-securities.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.eugeneInvestmentFutures'),
                            description: t('projectPage.providePrimaSolution'),
                            img: '/images/pages/projects/prj-img-eugene.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.hanaFinancialInvestment'),
                            description: t('projectPage.establishmentOfPrimaSpanSolution'),
                            img: '/images/pages/projects/prj-img-hana-financial.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.lotteDataCommunicationVietnam'),
                            description: t('projectPage.establishmentOfFutureLedgerSolution'),
                            img: '/images/pages/projects/prj-img-lotte-data.jpg',
                            link: '#'
                        }
                    ]
                },
                {
                    phase: '2016',
                    items: [
                        {
                            title: t('projectPage.hanaFinancialInvestment'),
                            description: t('projectPage.establishmentOfNextGenerationSystem'),
                            img: '/images/pages/projects/prj-img-hana-financial.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.miraeAssetSecurities'),
                            description: t('projectPage.establishmentOfNextGenerationSystem'),
                            img: '/images/pages/projects/prj-img-mirae-asset.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.hyundaiSecurities'),
                            description: t('projectPage.buildPrimaSolutionAndGlobalOptionSystem'),
                            img: '/images/pages/projects/prj-img-hyundai.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.dbFinancialInvestment'),
                            description: t('projectPage.globalDerivativesBackupMarketDataEstablishment'),
                            img: '/images/pages/projects/prj-img-db-financial-invest.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.eugeneInvestmentFutures'),
                            description: t('projectPage.establishMts'),
                            img: '/images/pages/projects/prj-img-eugene.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.daewooIndonesia'),
                            description: t('projectPage.establishMts'),
                            img: '/images/pages/projects/prj-img-daewoo-indo.jpg',
                            link: '#'
                        }
                    ]
                }
            ]
        },
        {
            phase: '2014 - 2015',
            data: [
                {
                    phase: '2015',
                    items: [
                        {
                            title: t('projectPage.hyundaiSecurities'),
                            description: t('projectPage.establishGlobalStockMarket'),
                            img: '/images/pages/projects/prj-img-hyundai.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.shinhanInvestmentCorporation'),
                            description: t('projectPage.buildGlobalOptionSystem'),
                            img: '/images/pages/projects/prj-img-shinhan-invest.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.nhFuture'),
                            description: t('projectPage.transferDomesticGlobalDerivatives'),
                            img: '/images/pages/projects/prj-img-nhfuture.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.kyoboSecurities'),
                            description: t('projectPage.improvementPerformanceGlobalDerivatives'),
                            img: '/images/pages/projects/prj-img-kyobo.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.dbFinancialInvestment'),
                            description: t('projectPage.establishGlobalDerivativesSystemHTSMarket'),
                            img: '/images/pages/projects/prj-img-db-financial-invest.jpg',
                            link: '#'
                        }
                    ]
                },
                {
                    phase: '2014',
                    items: [
                        {
                            title: t('projectPage.sungard'),
                            description: t('projectPage.setUpGlobalStock'),
                            img: '/images/pages/projects/prj-img-sungard.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.koskom'),
                            description: t('projectPage.additionalDevelopmentOfTablet'),
                            img: '/images/pages/projects/prj-img-koskom.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.koreaInvestmentSecuritiesEstablish'),
                            description: t('projectPage.mtsRenewalMobinEstablishmentGlobalDerivatives'),
                            img: '/images/pages/projects/prj-img-korea-invest.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.shinyoungSecurities'),
                            description: t('projectPage.improvementPerformanceGlobalDerivatives'),
                            img: '/images/pages/projects/prj-img-shin-young.jpg',
                            link: '#'
                        }
                    ]
                }
            ]
        },
        {
            phase: '2011 - 2013',
            data: [
                {
                    phase: '2013',
                    items: [
                        {
                            title: t('projectPage.koreaInvestmentSecuritiesCo'),
                            description: t('projectPage.mtsRenewalMobinEstablishmentGlobalDerivatives'),
                            img: '/images/pages/projects/prj-img-korea-invest.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.kebFutures'),
                            description: t('projectPage.developmentOfOmsAndFcmFix'),
                            img: '/images/pages/projects/prj-img-keb.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.dbFinancialInvestment'),
                            description: t('projectPage.globalFutureSystemEstablishmentPackage'),
                            img: '/images/pages/projects/prj-img-db-financial-invest.jpg',
                            link: '#'
                        },
                    ]
                },
                {
                    phase: '2011 - 2012',
                    items: [

                        {
                            title: t('projectPage.hyundaiSecurities'),
                            description: t('projectPage.globalFutureSystemEstablishment'),
                            img: '/images/pages/projects/prj-img-hyundai.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.japanMoneyPartnersCo'),
                            description: t('projectPage.marginFxSeoulHubService'),
                            img: '/images/pages/projects/prj-img-japan-money-partner.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.kbSecurities'),
                            description: t('projectPage.marginFxSystemAsp'),
                            img: '/images/pages/projects/prj-img-kb-securities.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.eugeneInvestmentFutures'),
                            description: t('projectPage.marginFxSystemAsp'),
                            img: '/images/pages/projects/prj-img-eugene.jpg',
                            link: '#'
                        }
                    ]
                }
            ]
        },
        {
            phase: '2010',
            data: [
                {
                    phase: '2010',
                    items: [
                        {
                            title: t('projectPage.koreaInvestmentSecuritiesCo'),
                            description: t('projectPage.marginFxSystemManagement'),
                            img: '/images/pages/projects/prj-img-korea-invest.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.miraeAssetSecurities'),
                            description: t('projectPage.globalFutureAndMarginFxTradingSystem'),
                            img: '/images/pages/projects/prj-img-mirae-asset.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.kyoboSecurities'),
                            description: t('projectPage.globalFutureAndMarginFxTradingSystem'),
                            img: '/images/pages/projects/prj-img-kyobo.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.citigroupGlobalMarketsSecurities'),
                            description: t('projectPage.establishmentOfGlobalFuture'),
                            img: '/images/pages/projects/prj-img-citigroup.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.solomonSecurities'),
                            description: t('projectPage.globalFutureAndMarginFxTradingSystem'),
                            img: '/images/pages/projects/prj-img-solomon.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.hyundaiSecurities'),
                            description: t('projectPage.globalFutureAndMarginFxTradingSystem'),
                            img: '/images/pages/projects/prj-img-hyundai.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.bsInvestmentsSecurities'),
                            description: t('projectPage.establishmentOfGlobalFuture'),
                            img: '/images/pages/projects/prj-img-bs-invest.jpg',
                            link: '#'
                        }
                    ]
                }
            ]
        },
        {
            phase: '2008 - 2009',
            data: [
                {
                    phase: '2008 - 2009',
                    items: [
                        {
                            title: t('projectPage.miraeAssetSecurities'),
                            description: t('projectPage.consultingOnGlobalFuture'),
                            img: '/images/pages/projects/prj-img-mirae-asset.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.nhInvestmentSecurities'),
                            description: t('projectPage.buildMarginFxTradingSystem'),
                            img: '/images/pages/projects/prj-img-nh-invest.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.leadingInvestmentSecurities'),
                            description: t('projectPage.globalFutureAndMarginFxTrading'),
                            img: '/images/pages/projects/prj-img-leading-invest.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.newEdgeSecurities'),
                            description: t('projectPage.globalFutureTradingSystemEstablishment'),
                            img: '/images/pages/projects/prj-img-new-edge-securities.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.kbBank'),
                            description: t('projectPage.establishmentOfMarginFx'),
                            img: '/images/pages/projects/prj-img-kb-bank.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.nhInvestmentFuture'),
                            description: t('projectPage.establishmentOfDomesticGlobal'),
                            img: '/images/pages/projects/prj-img-nhfuture.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.eugeneInvestmentFutures'),
                            description: t('projectPage.establishmentOfTradeStation'),
                            img: '/images/pages/projects/prj-img-eugene.jpg',
                            link: '#'
                        }
                    ]
                }
            ]
        },
        {
            phase: '2005 - 2007',
            data: [
                {
                    phase: '2005 - 2007',
                    items: [
                        {
                            title: t('projectPage.eugeneInvestmentFutures'),
                            description: t('projectPage.establishmentOfGlobalFutureLedgerSystemSupportsMulti'),
                            img: '/images/pages/projects/prj-img-eugene.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.fxPlatform'),
                            description: t('projectPage.establishmentOfMarginFxRich'),
                            img: '/images/pages/projects/prj-img-fx-platform.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.hanaBank'),
                            description: t('projectPage.establishmentOfMarginFxTradingSystem'),
                            img: '/images/pages/projects/prj-img-hana-bank.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.samsungFuture'),
                            description: t('projectPage.establishmentOfMarginFxTradingSystem'),
                            img: '/images/pages/projects/prj-img-samsung-future.jpg',
                            link: '#'
                        },
                        {
                            title: t('projectPage.wooriFuture'),
                            description: t('projectPage.establishmentOfMarginFxTradingSystem'),
                            img: '/images/pages/projects/prj-img-woori.jpg',
                            link: '#'
                        }
                    ]
                }
            ]
        }
    ]

    const currPhase = phases.find((p) => p.phase?.replaceAll(' ', '') === actTab);

    useLayoutEffect(() => {
        const tabItems = document.querySelectorAll('.tab-item');

        // Animate in the new tab items
        gsap.fromTo(tabItems,
            {
                opacity: 0,
                y: 20,
                scale: 0.98
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.2,
                ease: 'power1.out',
                stagger: 0.03
            }
        );
    }, [actTab]);

    const _onChangeTab = (_: unknown, v: string) => {
        const tabItems = document.querySelectorAll('.tab-item');

        // Animate out current items first
        gsap.to(tabItems, {
            opacity: 0,
            y: -10,
            scale: 0.98,
            duration: 0.1,
            ease: 'power1.in',
            onComplete: () => {
                // Change tab after animation completes
                setActTab(v);
            }
        });
    };



    return (
        <section className="projects-section bg-grey-200 sm:!py-[60px]  xs:py-[30px] ">
            <MainWrapper>
                <div className="xs:mt-[5] sm:!mt-[120px] flex flex-col items-center justify-center text-center max-w-[720px] mx-auto">
                    <h1
                        className="!text-[5rem] !leading-[6rem] font-bold"
                        dangerouslySetInnerHTML={{
                            __html: t('projectPage.projects'),
                        }}
                    />
                </div>
                <div className="flex xs:flex-col xs:mb-4 sm:!mt-[3.5rem]">
                    <TabStyle value={actTab} onChange={_onChangeTab}>
                        {phases.map((phase, prjIndex) => (
                            <Tab key={prjIndex} value={`${phase.phase.replaceAll(' ', '')}`} label={phase.phase} />
                        ))}
                    </TabStyle>
                </div>
                <div className="py-6 flex flex-col gap-[3rem] ">
                    {currPhase && currPhase.data.map((phase, phaseIndex) => (
                        <div className='tab-item' key={phaseIndex}>
                            <h3 className="section-title xs:mb-4 sm:!mb-[3.5rem]">
                                {phase.phase}
                            </h3>
                            <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:!grid-cols-4 xs:gap-x-[1rem] xs:gap-y-[1.5rem] sm:!gap-x-[1.5rem] sm:!gap-y-[3rem]">
                                {/* Project Card */}
                                {phase.items.map((item, itemIndex) => (
                                    <div className="flex flex-col tab-item" key={itemIndex}>
                                        <div className="img-wrap w-full h-[210px] overflow-hidden rounded-xl">
                                            <img
                                                className="w-full h-full mx-auto rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                                                src={item.img}
                                            />
                                        </div>
                                        <h6 className="mt-[1rem] text-black text-[1.125rem] leading-[1.75rem] font-medium">
                                            {item.title}
                                        </h6>
                                        <p className="text-grey-600 text-[1rem] leading-[1.5rem] font-normal line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </MainWrapper>
        </section>
    );
};

const TabStyle = styled(Tabs)(({ theme }) => ({
    '.MuiTabs-scroller': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '.MuiTabs-indicator': {
        display: 'none',
    },
    '.MuiTabs-flexContainer': {
        gap: '0 0.5rem',
        background: theme.palette.common.white,
        padding: '0.25rem',
        borderRadius: '0.25rem',
    },
    button: {
        minWidth: '100px',
        borderRadius: '0.5rem',
        background: theme.palette.common.white,
        color: theme.palette.grey[400],
        textTransform: 'initial',
        transition: 'all .25s',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        fontWeight: 500,
        minHeight: '2.25rem',
        height: '2.25rem',
        '&.Mui-selected': {
            color: theme.palette.common.white,
            background: '#6f77da',
            transition: 'all .25s',
        },
    },
    [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
    [theme.breakpoints.down('lg')]: {},
    [theme.breakpoints.down('md')]: {},
    [`@media (min-width: 768px) and (max-width: 860px)`]: {
        marginTop: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
        button: {
            minWidth: '100px',
        },
    },
    [`@media (min-width: 320px) and (max-width: 375px)`]: {
        button: {
            minWidth: '80px',
        },
    },
}));

export default ProjectSection;