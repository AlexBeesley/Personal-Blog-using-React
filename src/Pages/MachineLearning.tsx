import { useEffect } from 'react';
import Style from '../Styles/pages.module.scss'
import Card from '../Components/card'
import CodeBox from '../Components/codebox'
import PageContents from '../Components/pagecontents'

export default function MachineLearning() {
    const titles = [
        'Overview',
        'Service',
        'API',
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className={Style.title}>
                <h1 className={Style.mobileHeading}>Machine Learning</h1>
            </div>
            <PageContents titles={titles} links={titles} />
            <div className={Style.padding} />

            <a className={Style.anchor} id={titles[0]} />
            <Card title={titles[0]} blogpost={true}>
                <p>
                    In this project, I investigated the potential of Machine Learning (ML) techniques, specifically Long Short-Term Memory (LSTM) and Fully Connected Neural Networks (FCNN), in accurately forecasting exchange rates. Exchange rate forecasting is a complex and highly volatile time-series problem, with socioeconomic and political factors contributing to its difficulty.
                </p>
                <p>
                    To facilitate the research, I developed a software suite, referred to as ExRate, consisting of three components. The ExRate Service, a Python-based ML project responsible for procuring historical exchange rate data and training time-series models, using TensorFlow, Keras and Scikit-Learn; the ExRate API, a .NET API that automates the execution of the ExRate Service to facilitate user interactions; and the ExRate Frontend, a Single Page Application built using React, which serves as a showcase for the ExRate API.
                </p>
                <p>
                    The goal was to compare the performance of LSTM and FCNN models in predicting exchange rates within a 5% margin of error. The results of this investigation show that the LSTM model outperforms the FCNN model; the LSTM model often produced predictions within a 5% margin of error.
                </p>
                <p>
                    By adopting Agile principles and DevOps practices, the ExRate suite demonstrates the advantages of following industry software development standards to deliver exchange rate forecasting as a service. This project contributes to the understanding of ML techniques in forecasting exchange rates and provides a framework for future research and practical applications in the field.
                </p>
                <div className={Style.buttonGroup}>
                    <a
                        className={Style.linkAsButton}
                        href="https://github.com/AlexBeesley/ExRate"  // replace with actual link to your project repository
                        target="_blank"
                        rel="noreferrer"
                        title="My Exchange Rate Forecast Repository on GitHub"
                    >
                        Project Repository
                    </a>
                    <a
                        className={Style.linkAsButton}
                        href="https://exrate-frontend.netlify.app/assets/pdf/CI601-Final_Report-David_Beesley.695b38be.pdf"  // link to the PDF report
                        target="_blank"
                        rel="noreferrer"
                        title="Final Report on Exchange Rate Forecast Project"
                    >
                        Final Report
                    </a>
                </div>
            </Card>

            <a className={Style.anchor} id={titles[1]} />
            <Card title={titles[1]} blogpost={true}>
                <p>
                    The ExRate Service is a sophisticated exchange rate prediction system. It employs machine learning models to forecast future exchange rates based on historical data.{' '}
                    The data is sourced from an <a
                        className={Style.inlineLink}
                        href="https://apilayer.com/marketplace/exchangerates_data-api?live_demo=show"  // link to the PDF report
                        target="_blank"
                        rel="noreferrer"
                        title="API for exchange rate data."
                    >
                        external API
                    </a>, which provides reliable and up-to-date exchange rate information. The Service takes this data, performs normalisation to ensure
                    consistency, and then feeds it into the machine learning models for training. The models are subsequently used to predict future exchange
                    rates, providing valuable insights for financial decision-making. This blog post will delve into the code structure and the key functionalities
                    of the ExRate Service.
                </p>
                <p>
                    The entry point of the ExRate Service is the <code className={Style.inlineCode}>program.py</code> file. This script can be executed as a standalone 
                    application to predict exchange rates, or it can be integrated into the ExRate API for real-time predictions. When running as a standalone app, you 
                    can simply execute the script from the command line with the appropriate arguments, such as <code className={Style.inlineCode}>python program.py --base USD --target EUR</code>, 
                    where <code className={Style.inlineCode}>--base</code> and <code className={Style.inlineCode}>--target</code> specify the base and target currencies for the prediction. When 
                    integrated into the ExRate API, the script's functionality can be accessed via API endpoints, allowing for real-time exchange rate predictions as part of a larger application.
                </p>

                <CodeBox language={'python'}>
                    {post1f1()}
                </CodeBox>
                <p>
                    The ExRate Service uses a special type of Recurrent Neural Network (RNN) known as the Long Short-Term Memory (LSTM) model for predictions.
                    This model is particularly suitable for time series prediction tasks because it can remember patterns over long sequences. This is made
                    possible by LSTM's unique cell state, which is represented in code as <code className={Style.inlineCode}>lstm_cell = LSTMCell(num_units)</code>,
                    where <code className={Style.inlineCode}>num_units</code> specifies the number of units in the LSTM cell. This cell state can carry
                    information throughout the processing of the sequence, making it possible for our LSTM model to learn and remember information over
                    long periods of time, an essential feature for predicting future exchange rates.
                </p>
                <CodeBox language={'python'}>
                    {post1f2()}
                </CodeBox>
                <p>
                    The ExRate Service also utilises a Fully Connected Neural Network (FCNN) for exchange rate predictions. FCNNs, also known as dense networks,
                    are a type of neural network where each neuron in one layer is connected to all neurons in the next layer. This is usually achieved using
                    the <code className={Style.inlineCode}>Dense</code> layer in code, as in <code className={Style.inlineCode}>dense_layer = Dense(units, activation='relu')</code>,
                    where <code className={Style.inlineCode}>units</code> refers to the dimensionality of the output space and <code className={Style.inlineCode}>activation</code>
                    specifies the activation function to use. These networks are known for their capability to learn complex patterns, which makes them suitable for a variety of tasks,
                    including the prediction of exchange rates.
                </p>
                <CodeBox language={'python'}>
                    {post1f3()}
                </CodeBox>
                <p>
                    At the heart of the ExRate Service is the Model Manager, which is responsible for creating, training, and managing the LSTM and FCNN models. The Model Manager is
                    instantiated with a specific model type and parameters, like so: <code className={Style.inlineCode}>model_manager = ModelManager(model_type, params)</code>.
                    The <code className={Style.inlineCode}>model_type</code> parameter specifies which model to use (LSTM or FCNN), and the <code className={Style.inlineCode}>params</code>
                    parameter includes the necessary hyperparameters for that model. The Model Manager ensures that the selected model is correctly initialised, trained on the provided data,
                    and subsequently used for prediction, effectively encapsulating the entire machine learning pipeline within a single entity.
                </p>
                <p>
                    The program begins its execution from the <code className={Style.inlineCode}>if __name__ == '__main__':</code> block. It parses command line arguments for base currency, target currency, 
                    and model type using the <code className={Style.inlineCode}>argparse</code> module. If these arguments are provided, they are processed with the <code className={Style.inlineCode}>process_args(args, has_args=True)</code>
                    function. If not, the user is greeted with a welcome message and asked to provide the required input interactively.
                </p>
                <p>
                    The <code className={Style.inlineCode}>process_args(args, has_args)</code> function reads in a list of valid currency abbreviations from a CSV file using the <code className={Style.inlineCode}>read_currency_codes()</code> 
                    function. If arguments were provided via command line, they are used as such. Otherwise, the user is prompted to input the base currency, target currency, and model type. The input is then validated against the list of valid
                    currency abbreviations and the acceptable model types (FCNN or LSTM). If the validation is successful, the <code className={Style.inlineCode}>main()</code> function is called with the provided input.
                </p>
                <p>
                    The <code className={Style.inlineCode}>main()</code> function initiates the main processing and prediction pipeline. It creates an instance of the <code className={Style.inlineCode}>ProcessDataFromResponse</code>
                    class to process the data and obtains weekly and yearly rates and dates. A <code className={Style.inlineCode}>ModelManager</code> instance is then created, passing in the necessary parameters including the model type, 
                    currency rates and dates, and other information. The <code className={Style.inlineCode}>run()</code> method of the Model Manager is invoked to generate the forecast and the model's history, as well as to calculate the 
                    Mean Absolute Error (MAE). Subsequently, the <code className={Style.inlineCode}>display_results()</code> function is called to display the results.
                </p>
                <p>
                    The <code className={Style.inlineCode}>display_results()</code> function prints the historical and forecast data and also calculates and displays the percentage difference between the forecast and actual rates using the
                    <code className={Style.inlineCode}>PercentageDifferenceCalculator</code> class. If command line arguments were not provided, it also generates evaluation graphs using the <code className={Style.inlineCode}>GenerateGraphsFromData</code>
                    class.
                </p>
            </Card>

            <a className={Style.anchor} id={titles[2]} />
            <Card title={titles[2]} blogpost={true}>
                <p>
                    The ExRate_API project is a .NET 6.0 application that provides an API for forecasting exchange rates. The project is structured using the MVC (Model-View-Controller) pattern and uses the NUnit framework for testing. One of the interesting features of this project is the use of a token to handle the long-running process of building the machine learning model from the service in the background.
                </p>
                <p>
                    The project is divided into several parts:
                    <ul>
                        <li><strong>Controllers:</strong> Handles incoming HTTP requests and send responses.</li>
                        <li><strong>DataFromService:</strong> Contains the logic for fetching and processing exchange rate data.</li>
                        <li><strong>Tests:</strong> Contains unit tests for the project.</li>
                        <li><strong>Configs:</strong> Contains configuration settings.</li>
                    </ul>
                </p>
                <p>
                    The main controller in this project is the <code className={Style.inlineCode}>GetExRateForecastController</code>. This controller handles two main HTTP requests:
                    <ul>
                        <li>A <code className={Style.inlineCode}>POST</code> request to start the process of fetching and processing exchange rate data.</li>
                        <li>A <code className={Style.inlineCode}>GET</code> request to retrieve the result of a previously started process.</li>
                    </ul>
                </p>
                <CodeBox language={'csharp'}>
                    {post2f1()}
                </CodeBox>
                <p>
                    The <code className={Style.inlineCode}>StartProcess</code> method initiates the process of fetching and processing exchange rate data. It returns a token that can be used to retrieve the result of the process once it's complete. This is a clever way to handle long-running processes, as it allows the client to continue doing other things while the process is running, and then retrieve the result when it's ready. The <code className={Style.inlineCode}>GetResult</code> method takes a token as a parameter and returns the result of the process associated with that token. If the process is not yet complete, it returns a status indicating that the result is not yet ready.
                </p>
                <p>
                    A developer would use this API by first sending a <code className={Style.inlineCode}>POST</code> request to the <code className={Style.inlineCode}>/api/GetExRateForecast</code> endpoint to start the process of fetching and processing exchange rate data. This request would include the base currency, target currency, and model type as query parameters. The API would return a token that the developer could use to retrieve the result of the process.
                </p>
                <p>
                    The <code className={Style.inlineCode}>DataFromService</code> namespace contains classes that implement the <code className={Style.inlineCode}>IGetExRateForecast</code> interface. These classes fetch and process exchange rate data. The <code className={Style.inlineCode}>GetExRateForecastBase</code> class provides a base implementation, and the <code className={Style.inlineCode}>GetExRateForecastLocally</code> and <code className={Style.inlineCode}>GetExRateForecastInContainer</code> classes provide specific implementations for running the service locally or in a container, respectively.
                </p>
                <CodeBox language={'csharp'}>
                    {post2f2()}
                </CodeBox>
                <p>
                    The project uses the <code className={Style.inlineCode}>NUnit</code> framework for testing. The <code className={Style.inlineCode}>GetExRateForecastBaseTests</code> class contains tests for the <code className={Style.inlineCode}>GetExRateForecastBase</code> class, and the <code className={Style.inlineCode}>GetExRateForecastControllerTests</code> class contains tests for the <code className={Style.inlineCode}>GetExRateForecastController</code> class.
                </p>
                <CodeBox language={'csharp'}>
                    {post2f3()}
                </CodeBox>
                <p>
                    The <code className={Style.inlineCode}>SetUp</code> method is run before each test to set up the test environment. The <code className={Style.inlineCode}>RunProcessAsync_ShouldReturnCorrectResult</code> and <code className={Style.inlineCode}>CombineIntoJson_ShouldReturnCorrectResult</code> methods are tests for the <code className={Style.inlineCode}>RunProcessAsync</code> and <code className={Style.inlineCode}>CombineIntoJson</code> methods of the <code className={Style.inlineCode}>GetExRateForecastBase</code> class, respectively.
                </p>
            </Card>

        </div>
    )

}

const post1f1 = () => {
    return `
from keras import Sequential, regularizers
from keras.layers import LSTM as KerasLSTM, Dense
from keras.optimizers import RMSprop


class LSTM:
    def __init__(self, input_shape):
        self.model = Sequential()
        self.model.add(KerasLSTM(64, input_shape=input_shape, activation='relu',
                                    kernel_regularizer=regularizers.l2(0.001), return_sequences=True))
        self.model.add(KerasLSTM(32, activation='relu',
                                    kernel_regularizer=regularizers.l2(0.001), return_sequences=True))
        self.model.add(KerasLSTM(16, activation='relu', kernel_regularizer=regularizers.l2(0.001)))
        self.model.add(Dense(1))
        self.model.compile(optimizer=RMSprop(learning_rate=0.001), loss='mse', metrics=['mae'])

    def get_model(self):
        return self.model`
}

const post1f2 = () => {
    return `
from keras import Sequential, regularizers
from keras.layers import Dense, Flatten, Dropout, BatchNormalization
from keras.optimizers import RMSprop


class FCNN:
    def __init__(self, input_shape):
        self.model = Sequential()
        self.model.add(Flatten(input_shape=input_shape))
        self.model.add(Dense(128, activation='relu', kernel_regularizer=regularizers.l2(0.001)))
        self.model.add(BatchNormalization())
        self.model.add(Dropout(0.5))
        self.model.add(Dense(64, activation='relu', kernel_regularizer=regularizers.l2(0.001)))
        self.model.add(BatchNormalization())
        self.model.add(Dropout(0.5))
        self.model.add(Dense(32, activation='relu', kernel_regularizer=regularizers.l2(0.001)))
        self.model.add(BatchNormalization())
        self.model.add(Dense(1))
        self.model.compile(optimizer=RMSprop(learning_rate=0.001), loss='mse', metrics=['mae'])

    def get_model(self):
        return self.model`
}

const post1f3 = () => {
    return `
import numpy as np
from keras.callbacks import EarlyStopping
from keras.losses import mean_absolute_error
from DataPreprocessing.DataNormaliser import DataNormaliser
from MachineLearning.Models.FCNN import FCNN
from MachineLearning.Models.LSTM import LSTM

class ModelManager:
    def __init__(self, verbosity, model_type, year_rates, year_dates, base, target, lookback):
        self.lookback = lookback
        self.verbosity = verbosity
        self.model_type = model_type
        self.year_rates = year_rates
        self.year_dates = year_dates
        self.base = base
        self.target = target
        self.input_shape = (lookback, 1)
        self.normaliser = DataNormaliser()

    def select_model(self):
        if self.model_type == "FCNN":
            return FCNN(self.input_shape).get_model()
        elif self.model_type == "LSTM":
            return LSTM(self.input_shape).get_model()
        else:
            raise ValueError("Invalid model type. Choose either 'FCNN' or 'LSTM'.")

    def prepare_data(self):
        normalised_year_rates = self.normaliser.normalise(self.year_rates)
        x_train = []
        y_train = []
        for i in range(len(normalised_year_rates) - self.lookback):
            x_train.append(normalised_year_rates[i:i + self.lookback])
            y_train.append(normalised_year_rates[i + self.lookback])
        x_train, y_train = np.array(x_train), np.array(y_train)
        return x_train, y_train


    def train_model(self, model, x_train, y_train):
        early_stopping = EarlyStopping(monitor='val_loss', patience=20,
                                        restore_best_weights=True, verbose=self.verbosity)
        model.compile(loss=mean_absolute_error, optimizer='adam', metrics=['mae'])
        history = model.fit(x_train, y_train, epochs=100, batch_size=32, validation_split=0.1,
                            callbacks=[early_stopping], shuffle=False, verbose=self.verbosity)
        return history

    def forecast(self, model, x_train):
        predictions = []
        last_known = x_train[-1]
        for _ in range(7):
            prediction = model.predict(np.array([last_known]), verbose=self.verbosity)
            predictions.append(prediction[0][0])
            last_known = np.vstack((last_known[1:], prediction))
        predictions = np.array(predictions).reshape(-1, 1)
        return self.normaliser.denormalise(predictions).flatten().tolist()

    def evaluate(self, y_true, y_pred):
        y_true = np.array(y_true)
        y_pred = np.array(y_pred)
        return mean_absolute_error(y_true, y_pred)

    def run(self):
        model = self.select_model()
        x_train, y_train = self.prepare_data()
        history = self.train_model(model, x_train, y_train)
        forecast = self.forecast(model, x_train)
        mae = self.evaluate(self.year_rates[-7:], forecast)
        return forecast, history, mae`
}

const post2f1 = () => {
    return `
using ExRate_API.DataFromService;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Concurrent;

namespace ExRate_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GetExRateForecastController : ControllerBase
    {
        private readonly ILogger<GetExRateForecastController> _logger;
        private readonly IGetExRateForecast _ExRateForecast;

        public GetExRateForecastController(ILogger<GetExRateForecastController> logger, IGetExRateForecast ExRateForecast)
        {
            _logger = logger;
            _ExRateForecast = ExRateForecast;
        }

        [HttpPost("")]
        public async Task<IActionResult> StartProcess([FromQuery] string baseCurrency, [FromQuery] string targetCurrency, [FromQuery] string modelType)
        {
            if (string.IsNullOrWhiteSpace(baseCurrency) || string.IsNullOrWhiteSpace(targetCurrency) || string.IsNullOrWhiteSpace(modelType))
            {
                _logger.LogError("Invalid input parameters.");
                return BadRequest("All input parameters (baseCurrency, targetCurrency, and modelType) are required.");
            }

            var token = Guid.NewGuid().ToString();
            var task = _ExRateForecast.GetOutputAsync(baseCurrency, targetCurrency, modelType);
            Task.Run(() => SaveTask(token, task));

            return Ok(new { Token = token });
        }

        [HttpGet("{token}")]
        public async Task<IActionResult> GetResult(string token)
        {
            try
            {
                if (string.IsNullOrEmpty(token))
                {
                    return BadRequest("Token cannot be null or empty.");
                }

                var taskExists = Tasks.TryGetValue(token, out var task);

                if (!taskExists)
                {
                    return NotFound("Task not found for token.");
                }

                if (!task.IsCompleted)
                {
                    return NotFound("Task not yet completed.");
                }

                var result = await task;

                if (result == null)
                {
                    return NotFound("Result not found.");
                }

                return Ok(result);
            }
            catch (Exception ex) 
            {
                return StatusCode(503, $"Data from dependant API not available. Please try again later. \nError: {ex}");
            }
        }


        private static readonly ConcurrentDictionary<string, Task<string>> Tasks = new ConcurrentDictionary<string, Task<string>>();

        private void SaveTask(string token, Task<string> task)
        {
            Tasks[token] = task;
        }

        private Task<string> RetrieveTask(string token)
        {
            Tasks.TryRemove(token, out var task);
            return task;
        }
    }
}    
`}

const post2f2 = () => {
    return `
using ExRate_API.Controllers;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq.Expressions;
using System.Text;

namespace ExRate_API.DataFromService
{
    public class GetExRateForecastBase
    {
        protected readonly ILogger<GetExRateForecastController> _logger;

        public GetExRateForecastBase(ILogger<GetExRateForecastController> logger)
        {
            _logger = logger;
        }

        protected virtual async Task<string> RunProcessAsync(string fileName, string scriptPath, string scriptDirectory, string targetCurrency, string baseCurrency, string modelType)
        {
            var process = new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = fileName,
                    Arguments = scriptPath + $" -b {baseCurrency} -t {targetCurrency} -m {modelType}",
                    UseShellExecute = false,
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    CreateNoWindow = true,
                    WorkingDirectory = scriptDirectory
                },
                EnableRaisingEvents = true
            };

            StringBuilder outputBuilder = new StringBuilder();

            process.ErrorDataReceived += (sender, e) =>
            {
                if (!string.IsNullOrEmpty(e.Data) && !IsTensorRTWarningMessage(e.Data))
                {
                    _logger.LogError($"Error from process: {e.Data}");
                }
            };

            process.OutputDataReceived += (sender, e) =>
            {
                if (!string.IsNullOrEmpty(e.Data))
                {
                    outputBuilder.Append(e.Data);
                }
            };

            await ProcessSequenceAsync(process);

            return CombineIntoJson(outputBuilder.ToString());
        }

        private bool IsTensorRTWarningMessage(string message)
        {
            return message.Contains("TF-TRT Warning: Could not find TensorRT");
        }


        protected virtual string CombineIntoJson(string output)
        {
            int firstBracketIndex = output.IndexOf('{');
            int secondBracketIndex = output.IndexOf('{', firstBracketIndex + 1);

            if (firstBracketIndex < 0 || secondBracketIndex < 0)
            {
                throw new JsonReaderException("Invalid JSON provided.");
            }

            string combinedJson = output.Substring(firstBracketIndex);

            JObject historicalData = JObject.Parse(combinedJson.Substring(0, secondBracketIndex - firstBracketIndex));
            JObject forecast = JObject.Parse(combinedJson.Substring(secondBracketIndex - firstBracketIndex));

            if (historicalData != null && forecast != null) {
                var result = new Dictionary<string, object>
                {
                    { "historicalData", historicalData.ToObject<Dictionary<string, object>>() },
                    { "forecast", forecast.ToObject<Dictionary<string, object>>() }
                };

                using (var writer = new StringWriter())
                {
                    using (var jsonWriter = new JsonTextWriter(writer))
                    {
                        jsonWriter.Formatting = Formatting.Indented;
                        new JsonSerializer().Serialize(jsonWriter, result);
                    }

                    return writer.ToString();
                }
            }

            throw new JsonReaderException("No JSON provided.");
        }

        private async Task ProcessSequenceAsync(Process process)
        {
            process.Start();
            process.BeginErrorReadLine();
            process.BeginOutputReadLine();
            await process.WaitForExitAsync();
        }
    }
}    
`}

const post2f3 = () => {
    return `
using ExRate_API.Controllers;
using ExRate_API.DataFromService;
using ExRate_API.Tests.TestHelpers;
using Microsoft.Extensions.Logging;
using Moq;
using Newtonsoft.Json.Linq;

namespace ExRate_API.Tests.DataFromService
{
    [TestFixture]
    public class GetExRateForecastBaseTests
    {
        private Mock<ILogger<GetExRateForecastController>> _loggerMock;
        private TestHelperForGetExRateForecastBase _testHelperForGetExRateForecastBase;

        [SetUp]
        public void Setup()
        {
            _loggerMock = new Mock<ILogger<GetExRateForecastController>>();
            _testHelperForGetExRateForecastBase = new TestHelperForGetExRateForecastBase(_loggerMock.Object);
        }

        [Test]
        public void CombineIntoJson_ShouldThrowJsonReaderException_WhenInvalidJsonProvided()
        {
            // Arrange
            var invalidJson = "invalidJson";

            // Act & Assert
            Assert.Throws<Newtonsoft.Json.JsonReaderException>(() => _testHelperForGetExRateForecastBase.CallCombineIntoJson(invalidJson));
        }

        [Test]
        public void CombineIntoJson_ShouldReturnCombinedJson_WhenValidJsonProvided()
        {
            // Arrange
            var validJson = "{\\\"date\\\": \\\"2023-01-01\\\"}{\\\"date\\\": \\\"2023-02-01\\\"}";
            var expectedResult = "{\\r\\n  \\\"forecast\\\": {\\r\\n    \\\"date\\\": \\\"2023-02-01\\\"\\r\\n  },\\r\\n  \\\"historicalData\\\": {\\r\\n    \\\"date\\\": \\\"2023-01-01\\\"\\r\\n  }\\r\\n}";

            // Act
            var result = _testHelperForGetExRateForecastBase.CallCombineIntoJson(validJson);

            // Assert
            var expectedJson = JObject.Parse(expectedResult);
            var resultJson = JObject.Parse(result);
            var expectedJsonSorted = new JObject(expectedJson.Properties().OrderBy(p => p.Name));
            var resultJsonSorted = new JObject(resultJson.Properties().OrderBy(p => p.Name));

            Assert.AreEqual(expectedJsonSorted.ToString(), resultJsonSorted.ToString());
        }
    }
}    
`}