import DeveloperLottie from './animation';

export default function Hero(){
    return(<>
            <div className="lg:flex-grow w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"></h1>
                <p className="mb-8 leading-relaxed">광야a에서 피는 길지 그들은 피다. 귀는 청춘은 들어 이상, 속잎나고, 것이다. 청춘이 있는 오직 불어 그들은 원대하고, 너의 같지 인간이 약동하다. 되는 인생을 위하여 가는 찾아다녀도, 못하다 황금시대를 힘있다. 같으며, 그와 우리는 생의 그들의 사는가 봄날의 아니다. 관현악이며, 간에 반짝이는 사막이다. 자신과 소금이라 원질이 것이다.보라, 내는 든 것은 유소년에게서 인간은 위하여서. 소리다.이것은 굳세게 어디 있다. 이상은 희망의 무엇을 반짝이는 대중을 열매를 약동하다.</p>
                <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">프로젝트보러가기</button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <DeveloperLottie/>
            </div>
            </>
    )
}